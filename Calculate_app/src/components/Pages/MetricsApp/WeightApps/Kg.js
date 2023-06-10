import React from "react";
import "./weightStyle.css";
import CalculateButton from "../../../CalculateButton/CalculateButton";

export default function Kg() {
  return (
    <div
      className="window-weight"
      style={{ display: "grid", justifyContent: "center" }}
    >
      <div className="row" style={{ width: "auto" }}>
        <div className="input-row row" style={{ justifyContent: "center" }}>
          <div className="input-group mb-3" style={{ width: "auto" }}>
            <input
              type="number"
              className="form-control"
              id="kgInput"
              name="kgInput"
              placeholder="Enter KG"
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
                Gram
              </span>
              <input
                id="kgGramsOutput"
                name="kgGramsOutput"
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
                Pound
              </span>
              <input
                id="kgPoundsOutput"
                name="kgPoundsOutput"
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
                id="kgOuncesOutput"
                name="kgOuncesOutput"
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
              onClick={kgto}
            /> */}
            <CalculateButton onClick={kgto} />
          </div>
        </div>
      </div>
    </div>
  );
  function kgto() {
    var kgInput = parseFloat(document.getElementById("kgInput").value);

    var kgtogr = (kgInput * 1000).toFixed(2);
    var kgtopound = (kgInput * 2.2046).toFixed(2);
    var kgtoounce = (kgInput * 35.274).toFixed(2);

    document.getElementById("kgGramsOutput").value = kgtogr;
    document.getElementById("kgPoundsOutput").value = kgtopound;
    document.getElementById("kgOuncesOutput").value = kgtoounce;
  }
}
