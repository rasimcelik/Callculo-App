import React, { useState } from "react";
import "./RightPanel.css";

export default function RightPanel({}) {
  // state
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  var meter = height / 100;

  let calcBmi = (event) => {
    event.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = weight / (meter * meter);
      setBmi(bmi.toFixed(1));

      //   logic for message
      if (bmi < 18.5) {
        setMessage("You are underweight");
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        setMessage("You are normal");
      } else if (bmi >= 25 && bmi <= 29.9) {
        setMessage("You are overweight");
      } else if (bmi >= 30) {
        setMessage("You are obese !  😱");
      }
    }
  };

  let imgSrc = "";
  if (bmi < 1) {
    imgSrc = null;
  } else {
    if (bmi < 18.5) {
      imgSrc = require("../images/underweight.png");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      imgSrc = require("../images/healthy.png");
    } else if (bmi >= 25 && bmi <= 29.9) {
      imgSrc = require("../images/overweight.png");
    }
  }

  const deleteValues = () => {
    setWeight("");
    setHeight("");
    setMessage("");
  };

  return (
    <div className="bmiApp">
      <div className="bmiContainer">
        <h2 className="bmiCenter">BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label id="bmiLabels">Weight (kg)</label>
            <input
              id="bmiInput"
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
            />
          </div>
          <div>
            <label id="bmiLabels">Height (cm)</label>
            <input
              id="bmiInput"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <div className="bmiButtonDiv">
            <button className="bmiButton" type="submit">
              Submit
            </button>
            <button
              className="bmiButton bmiButton-outline"
              type="reload"
              onClick={deleteValues}
            >
              Reload
            </button>
          </div>
        </form>

        <div className="bmiCenter">
          <h3 id="bmiH3">
            Your BMI is: <span id="bmiH3Span">{bmi}</span>
          </h3>
          <p id="bmiP">{message}</p>
        </div>

        <div className="bmiImageContainer">
          <img src={imgSrc} alt="" />
        </div>
      </div>
    </div>
  );
}
