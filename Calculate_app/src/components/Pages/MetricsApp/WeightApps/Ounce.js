import React from "react";
import "./weightStyle.css";
import CalculateButton from "../../../CalculateButton/CalculateButton";

const Ounce = () => {
  return (
    <div>
      <div className="row">
        <div className="input-row row" style={{ justifyContent: "center" }}>
          <div className="input-group mb-3" style={{ width: "auto" }}>
            <input
              type="number"
              className="form-control"
              id="OunceInput"
              placeholder="Enter Ounce"
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
                id="OunceKgOutput"
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
                id="OuncePoundOutput"
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
                id="OunceGrOutput"
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
              onClick={ounceto}
            /> */}
            <CalculateButton onClick={ounceto} />
          </div>
        </div>
      </div>
    </div>
  );
  function ounceto() {
    var OunceInput = parseFloat(document.getElementById("OunceInput").value);

    var ouncetokg = OunceInput / 35.274;
    var ouncetopound = OunceInput * 0.0625;
    var ouncetogram = OunceInput / 0.035274;

    document.getElementById("OunceKgOutput").value = ouncetokg.toFixed(2);
    document.getElementById("OuncePoundOutput").value = ouncetopound.toFixed(2);
    document.getElementById("OunceGrOutput").value = ouncetogram.toFixed(2);
  }
};

export default Ounce;
