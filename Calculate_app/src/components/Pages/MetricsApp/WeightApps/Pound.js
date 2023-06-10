import React from "react";
import "./weightStyle.css";
import CalculateButton from "../../../CalculateButton/CalculateButton";

const Pound = () => {
  return (
    <div>
      <div className="row">
        <div className="input-row row" style={{ justifyContent: "center" }}>
          <div className="input-group mb-3" style={{ width: "auto" }}>
            <input
              type="number"
              className="form-control"
              id="poundInput"
              placeholder="Enter Pound"
              style={{ textAlign: "center" }}
            />
          </div>
        </div>

        <div
          className="row"
          style={{ display: "grid", justifyContent: "center" }}
        >
          <div
            className="result-rows row"
            style={{ justifyContent: "center", width: "20rem" }}
          >
            <div className="input-group mb-3">
              <span className="weightIGT input-group-text" id="basic-addon4">
                Kg
              </span>
              <input
                id="poundKgOutput"
                type="number"
                className="form-control"
              />
            </div>
          </div>
          <div
            className="result-rows row"
            style={{ justifyContent: "center", width: "20rem" }}
          >
            <div className="input-group mb-3">
              <span className="weightIGT input-group-text" id="basic-addon4">
                Gram
              </span>
              <input
                id="poundGrOutput"
                type="number"
                className="form-control"
              />
            </div>
          </div>
          <div
            className="result-rows row"
            style={{ justifyContent: "center", width: "20rem" }}
          >
            <div className="input-group mb-3">
              <span className="weightIGT input-group-text" id="basic-addon4">
                Ounce
              </span>
              <input
                id="poundOunceOutput"
                type="number"
                className="form-control"
              />
            </div>
          </div>
          <div
            id="weight-calc-btn"
            className="result-rows row"
            style={{ justifyContent: "center", width: "20rem" }}
          >
            {/* <input
              id="weight-calculate-button"
              type="button"
              value="calculate"
              onClick={poundto}
            /> */}
            <CalculateButton onClick={poundto} />
          </div>
        </div>
      </div>
    </div>
  );
  function poundto() {
    var poundInput = parseFloat(document.getElementById("poundInput").value);

    var poundtokg = poundInput / 2.2046;
    var poundtogr = poundInput / 0.0022046;
    var poundtoounce = poundInput * 0.035274;

    document.getElementById("poundKgOutput").value = poundtokg.toFixed(2);
    document.getElementById("poundGrOutput").value = poundtogr.toFixed(2);
    document.getElementById("poundOunceOutput").value = poundtoounce.toFixed(2);
  }
};

export default Pound;
