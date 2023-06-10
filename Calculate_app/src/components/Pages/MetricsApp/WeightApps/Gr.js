import React from "react";
import "./weightStyle.css";
import CalculateButton from "../../../CalculateButton/CalculateButton";

const Gr = () => {
  return (
    <div>
      <div className="row">
        <div className="input-row row" style={{ justifyContent: "center" }}>
          <div className="input-group mb-3" style={{ width: "auto" }}>
            <input
              type="number"
              className="form-control"
              id="grInput"
              placeholder="Enter Gram"
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
              <input id="grKgOutput" type="number" className="form-control" />
            </div>
          </div>
          <div
            className="result-rows row"
            style={{ justifyContent: "center", width: "20rem" }}
          >
            <div className="input-group mb-3">
              <span className="weightIGT input-group-text" id="basic-addon4">
                Pound
              </span>
              <input
                id="grPoundOutput"
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
                id="grOunceOutput"
                type="number"
                className="form-control"
              />
            </div>
          </div>
          <div
            className="result-rows row"
            style={{ justifyContent: "center", width: "20rem" }}
          >
            {/* <input
              id="weight-calculate-button"
              type="button"
              value="calculate"
              onClick={grto}
            /> */}
            <CalculateButton onClick={grto} />
          </div>
        </div>
      </div>
    </div>
  );
  function grto() {
    var grInput = parseFloat(document.getElementById("grInput").value);

    var grtokg = grInput / 1000;
    var grtopound = grInput * 0.0022046;
    var grtoounce = grInput * 0.035274;

    document.getElementById("grKgOutput").value = grtokg.toFixed(2);
    document.getElementById("grPoundOutput").value = grtopound.toFixed(2);
    document.getElementById("grOunceOutput").value = grtoounce.toFixed(2);
  }
};

export default Gr;
