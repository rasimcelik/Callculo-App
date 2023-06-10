import React from "react";
import CalculateButton from "../../CalculateButton/CalculateButton";
import "./SpeedApp.css";

export default function SpeedApp() {
  return (
    <div className="speedApp">
      <div className="speed_wrapper">
        <div className="speed_r row">
          <div className="speed_c_c col">
            <div className="speed_c col">
              <div className="input-group mb-3" id="speeds">
                <input
                  type="text"
                  name="mph"
                  className="form-control"
                  id="mph"
                  placeholder="MPH"
                />
                <span className="input-group-text" id="basic-addon5">
                  MPH
                </span>
              </div>
              <div className="speed-calc-button">
                <CalculateButton onClick={mphTo} />
              </div>

              {/* <input
                id="speed-calc-button"
                type="button"
                value="calculate"
                onClick={mphTo}
              /> */}
            </div>

            <div className="speed_c col">
              <div className="input-group mb-3" id="speeds">
                <input
                  type="text"
                  name="knots"
                  className="form-control"
                  id="knots"
                  placeholder="Knots"
                />
                <span className="input-group-text" id="basic-addon5">
                  Knots
                </span>
              </div>
              <div className="speed-calc-button">
                <CalculateButton onClick={knotsTo} />
              </div>

              {/* <input
                id="speed-calc-button"
                type="button"
                value="calculate"
                onClick={knotsTo}
              /> */}
            </div>
          </div>

          <div className="speed_c_c col">
            <div className="speed_c col">
              <div className="input-group mb-3" id="speeds">
                <input
                  type="text"
                  name="kph"
                  className="form-control"
                  id="kph"
                  placeholder="KPH"
                />
                <span className="input-group-text" id="basic-addon5">
                  KPH
                </span>
              </div>
              <div className="speed-calc-button">
                <CalculateButton onClick={kphTo} />
              </div>

              {/* <input
                id="speed-calc-button"
                type="button"
                value="calculate"
                onClick={kphTo}
              /> */}
            </div>

            <div className="speed_c col">
              <div className="input-group mb-3" id="speeds">
                <input
                  type="text"
                  name="mach"
                  className="form-control"
                  id="mach"
                  placeholder="Mach"
                />
                <span className="input-group-text" id="basic-addon5">
                  Mach
                </span>
              </div>
              <div className="speed-calc-button">
                <CalculateButton onClick={machTo} />
              </div>

              {/* <input
                id="speed-calc-button"
                type="button"
                value="calculate"
                onClick={machTo}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function mphTo() {
    var mphInput = parseFloat(document.getElementById("mph").value);

    var mphToKnots = (mphInput / 1.150779).toFixed(2);
    var mphToKph = (mphInput * 1.609344).toFixed(2);
    var mphToMach = (mphInput / 761.207).toFixed(2);

    document.getElementById("knots").value = mphToKnots;
    document.getElementById("kph").value = mphToKph;
    document.getElementById("mach").value = mphToMach;
  }
  function knotsTo() {
    var knotsInput = parseFloat(document.getElementById("knots").value);

    var knotsToMph = (knotsInput * 1.150779).toFixed(2);
    var knotsToKph = (knotsInput * 1.852).toFixed(2);
    var knotsToMach = (knotsInput / 661.4708).toFixed(2);

    document.getElementById("mph").value = knotsToMph;
    document.getElementById("kph").value = knotsToKph;
    document.getElementById("mach").value = knotsToMach;
  }
  function kphTo() {
    var kphInput = parseFloat(document.getElementById("kph").value);

    var kphToMph = (kphInput / 1.609344).toFixed(2);
    var kphToKnots = (kphInput / 1.852).toFixed(2);
    var kphToMach = (kphInput / 1225.044).toFixed(2);

    document.getElementById("mph").value = kphToMph;
    document.getElementById("knots").value = kphToKnots;
    document.getElementById("mach").value = kphToMach;
  }
  function machTo() {
    var machInput = parseFloat(document.getElementById("mach").value);

    var machToMph = (machInput * 761.207).toFixed(2);
    var machToKph = (machInput * 1225.044).toFixed(2);
    var machToKnots = (machInput * 661.4708).toFixed(2);

    document.getElementById("mph").value = machToMph;
    document.getElementById("kph").value = machToKph;
    document.getElementById("knots").value = machToKnots;
  }
}
