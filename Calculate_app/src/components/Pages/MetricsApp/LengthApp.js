import React from "react";
import CalculateButton from "../../CalculateButton/CalculateButton";
import "./LengthApp.css";

export default function LengthApp() {
  return (
    <div className="lengthApp">
      <div className="length_wrapper">
        <div className="length_r row">
          <div className="length_c_c col">
            <div className="length_c col">
              <div className="input-group mb-3" id="lengths">
                <input
                  type="text"
                  name="meter"
                  className="form-control"
                  id="meter"
                  placeholder="meter"
                />
                <span className="input-group-text" id="basic-addon5">
                  Meter
                </span>
              </div>
              {/* <input
                id="length-calc-button"
                type="button"
                value="calculate"
                onClick={meterTo}
              /> */}

              <div className="length-calc-button">
                <CalculateButton onClick={meterTo} />
              </div>
            </div>

            <div className="length_c col">
              <div className="input-group mb-3" id="lengths">
                <input
                  type="text"
                  name="cm"
                  className="form-control"
                  id="cm"
                  placeholder="cm"
                />
                <span className="input-group-text" id="basic-addon5">
                  Cm
                </span>
              </div>
              <div className="length-calc-button">
                <CalculateButton onClick={cmTo} />
              </div>
              {/* <input
                id="length-calc-button"
                type="button"
                value="calculate"
                onClick={cmTo}
              /> */}
            </div>

            <div className="length_c col">
              <div className="input-group mb-3" id="lengths">
                <input
                  type="text"
                  name="km"
                  className="form-control"
                  id="km"
                  placeholder="km"
                />
                <span className="input-group-text" id="basic-addon5">
                  Km
                </span>
              </div>
              <div className="length-calc-button">
                <CalculateButton onClick={kmTo} />
              </div>

              {/* <input
                id="length-calc-button"
                type="button"
                value="calculate"
                onClick={kmTo}
              /> */}
            </div>

            <div className="length_c col">
              <div className="input-group mb-3" id="lengths">
                <input
                  type="text"
                  name="feet"
                  className="form-control"
                  id="feet"
                  placeholder="feet"
                />
                <span className="input-group-text" id="basic-addon5">
                  feet
                </span>
              </div>
              <div className="length-calc-button">
                <CalculateButton onClick={feetTo} />
              </div>

              {/* <input
                id="length-calc-button"
                type="button"
                value="calculate"
                onClick={feetTo}
              /> */}
            </div>
          </div>

          <div className="length_c_c col">
            <div className="length_c col">
              <div className="input-group mb-3" id="lengths">
                <input
                  type="text"
                  name="inches"
                  className="form-control"
                  id="inches"
                  placeholder="inches"
                />
                <span className="input-group-text" id="basic-addon5">
                  Inch
                </span>
              </div>
              <div className="length-calc-button">
                <CalculateButton onClick={inchTo} />
              </div>
              {/* 
              <input
                id="length-calc-button"
                type="button"
                value="calculate"
                onClick={inchTo}
              /> */}
            </div>

            <div className="length_c col">
              <div className="input-group mb-3" id="lengths">
                <input
                  type="text"
                  name="yards"
                  className="form-control"
                  id="yards"
                  placeholder="yards"
                />
                <span className="input-group-text" id="basic-addon5">
                  Yards
                </span>
              </div>
              <div className="length-calc-button">
                <CalculateButton onClick={yardsTo} />
              </div>
              {/* <input
                id="length-calc-button"
                type="button"
                value="calculate"
                onClick={yardsTo}
              /> */}
            </div>

            <div className="length_c col">
              <div className="input-group mb-3" id="lengths">
                <input
                  type="text"
                  name="miles"
                  className="form-control"
                  id="miles"
                  placeholder="miles"
                />
                <span className="input-group-text" id="basic-addon5">
                  Miles
                </span>
              </div>
              <div className="length-calc-button">
                <CalculateButton onClick={milesTo} />
              </div>
              {/* 
              <input
                id="length-calc-button"
                type="button"
                value="calculate"
                onClick={milesTo}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function meterTo() {
    var meterInput = parseFloat(document.getElementById("meter").value);

    var mtToCm = (meterInput / 0.01).toFixed(2);
    var mtToKm = (meterInput / 1000).toFixed(2);
    var mtToFeet = (meterInput * 3.2808).toFixed(2);
    var mtToInch = (meterInput * 39.37).toFixed(2);
    var mtToYards = (meterInput * 1.0936).toFixed(2);
    var mtToMiles = (meterInput * 0.00062137).toFixed(2);

    document.getElementById("cm").value = mtToCm;
    document.getElementById("km").value = mtToKm;
    document.getElementById("feet").value = mtToFeet;
    document.getElementById("inches").value = mtToInch;
    document.getElementById("yards").value = mtToYards;
    document.getElementById("miles").value = mtToMiles;
  }
  function cmTo() {
    var cmInput = parseFloat(document.getElementById("cm").value);

    var cmToMt = (cmInput / 100).toFixed(2);
    var cmToKm = (cmInput / 100000).toFixed(2);
    var cmToFeet = (cmInput * 0.032808).toFixed(2);
    var cmToInches = (cmInput * 0.3937).toFixed(2);
    var cmToYards = (cmInput * 0.010936).toFixed(2);
    var cmToMiles = (cmInput * 0.0000062137).toFixed(2);

    document.getElementById("meter").value = cmToMt;
    document.getElementById("km").value = cmToKm;
    document.getElementById("feet").value = cmToFeet;
    document.getElementById("inches").value = cmToInches;
    document.getElementById("yards").value = cmToYards;
    document.getElementById("miles").value = cmToMiles;
  }
  function kmTo() {
    var kmInput = parseFloat(document.getElementById("km").value);

    var kmToMeter = (kmInput * 1000).toFixed(2);
    var kmToCm = (kmInput * 100000).toFixed(2);
    var kmToFeet = (kmInput * 3280.8).toFixed(2);
    var kmToInches = (kmInput * 39370).toFixed(2);
    var kmToYards = (kmInput * 1093.6).toFixed(2);
    var kmToMiles = (kmInput * 0.62137).toFixed(2);

    document.getElementById("meter").value = kmToMeter;
    document.getElementById("cm").value = kmToCm;
    document.getElementById("feet").value = kmToFeet;
    document.getElementById("inches").value = kmToInches;
    document.getElementById("yards").value = kmToYards;
    document.getElementById("miles").value = kmToMiles;
  }
  function feetTo() {
    var feetInput = parseFloat(document.getElementById("feet").value);

    var feetToMeter = (feetInput / 3.2808).toFixed(2);
    var feetToCm = (feetInput / 0.032808).toFixed(2);
    var feetToKm = (feetInput / 3280.8).toFixed(2);
    var feetToInches = (feetInput * 12).toFixed(2);
    var feetToYards = (feetInput * 0.33333).toFixed(2);
    var feetToMiles = (feetInput * 0.00018939).toFixed(2);

    document.getElementById("meter").value = feetToMeter;
    document.getElementById("cm").value = feetToCm;
    document.getElementById("km").value = feetToKm;
    document.getElementById("inches").value = feetToInches;
    document.getElementById("yards").value = feetToYards;
    document.getElementById("miles").value = feetToMiles;
  }
  function inchTo() {
    var inchTo = parseFloat(document.getElementById("inches").value);

    var inchToMeter = (inchTo / 39.37).toFixed(2);
    var inchToCm = (inchTo / 0.3937).toFixed(2);
    var inchToKm = (inchTo / 39370).toFixed(2);
    var inchToFeet = (inchTo * 0.083333).toFixed(2);
    var inchToYards = (inchTo * 0.027778).toFixed(2);
    var inchToMiles = (inchTo * 0.000015783).toFixed(2);

    document.getElementById("meter").value = inchToMeter;
    document.getElementById("cm").value = inchToCm;
    document.getElementById("km").value = inchToKm;
    document.getElementById("feet").value = inchToFeet;
    document.getElementById("yards").value = inchToYards;
    document.getElementById("miles").value = inchToMiles;
  }
  function yardsTo() {
    var yardInput = parseFloat(document.getElementById("yards").value);

    var yardToMeter = (yardInput / 1.0936).toFixed(2);
    var yardToCm = (yardInput / 0.010936).toFixed(2);
    var yardToKm = (yardInput / 1093.6).toFixed(2);
    var yardToFeet = (yardInput * 3).toFixed(2);
    var yardToInch = (yardInput * 36).toFixed(2);
    var yardToMiles = (yardInput * 0.00056818).toFixed(2);

    document.getElementById("meter").value = yardToMeter;
    document.getElementById("cm").value = yardToCm;
    document.getElementById("km").value = yardToKm;
    document.getElementById("feet").value = yardToFeet;
    document.getElementById("inches").value = yardToInch;
    document.getElementById("miles").value = yardToMiles;
  }
  function milesTo() {
    var milesInput = parseFloat(document.getElementById("miles").value);

    var milesToMeter = (milesInput / 0.00062137).toFixed(2);
    var milesToCm = (milesInput / 0.0000062137).toFixed(2);
    var milesToKm = (milesInput / 0.62137).toFixed(2);
    var milesToFeet = (milesInput * 5280).toFixed(2);
    var milesToInch = (milesInput * 63360).toFixed(2);
    var milesToYards = (milesInput * 1760).toFixed(2);

    document.getElementById("meter").value = milesToMeter;
    document.getElementById("cm").value = milesToCm;
    document.getElementById("km").value = milesToKm;
    document.getElementById("feet").value = milesToFeet;
    document.getElementById("inches").value = milesToInch;
    document.getElementById("yards").value = milesToYards;
  }
}
