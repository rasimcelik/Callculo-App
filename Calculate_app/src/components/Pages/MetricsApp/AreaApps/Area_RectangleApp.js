import React from "react";
import CalculateButton from "../../../CalculateButton/CalculateButton";
import "./areaStyle.css";

const Area_RectangleApp = () => {
  return (
    <div className="area-container">
      <table>
        <tbody>
          <tr>
            <td>Length</td>
            <td>
              <input type="number" id="rectangle-length"></input>
            </td>
          </tr>
          <tr>
            <td>Width</td>
            <td>
              <input type="number" id="rectangle-width"></input>
            </td>
          </tr>
          <tr>
            <td colSpan="3">
              <CalculateButton onClick={areaofrect} />
            </td>
          </tr>
          <tr>
            <td>Result</td>
            <td>
              <input type="number" id="rectresult"></input>
            </td>
          </tr>
        </tbody>
      </table>

      {/* <form id="form">
        <label className="area-labels ">
          Length
          <input className="area-inputs" type="number" id="rectangle-length" />
        </label>
        <label className="area-labels ">
          Width
          <input className="area-inputs" type="number" id="rectangle-width" />
        </label>
        <CalculateButton onClick={areaofrect} />
        <label className="area-alt-labels">
          Area of Rectangle is
          <input className="area-inputs" type="number" id="rectresult" />
        </label>
      </form> */}

      <span
        style={{
          display: "grid",
          marginTop: "1rem",
          color: "lightgrey",
          fontSize: "14px",
        }}
      >
        Please enter your digits in cantimeter
      </span>
    </div>
  );

  function areaofrect() {
    var length = document.getElementById("rectangle-length").value;
    var width = document.getElementById("rectangle-width").value;
    var area = length * width;

    document.getElementById("rectresult").value = area;
  }
};

export default Area_RectangleApp;
