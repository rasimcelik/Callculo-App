import React from "react";
import CalculateButton from "../../CalculateButton/CalculateButton";
import "./PressureApp.css";

export default function PressureApp() {
  return (
    <div className="pressureApp">
      <div className="pressure_wrapper">
        <div className="pressure_r row">
          <div className="pressure_c_c col">
            <div className="pressure_c col">
              <div className="input-group mb-3" id="pressures">
                <input
                  type="text"
                  name="bar"
                  className="form-control"
                  id="bar"
                  placeholder="Bar"
                />
                <span className="input-group-text" id="basic-addon5">
                  Bar
                </span>
              </div>
              <div className="pressure-calc-button">
                <CalculateButton onClick={barTo} />
              </div>
              {/* 
              <input
                id="pressure-calc-button"
                type="button"
                value="calculate"
                onClick={barTo}
              /> */}
            </div>

            <div className="pressure_c col">
              <div className="input-group mb-3" id="pressures">
                <input
                  type="text"
                  name="pascal"
                  className="form-control"
                  id="pascal"
                  placeholder="Pascal"
                />
                <span className="input-group-text" id="basic-addon5">
                  Pa
                </span>
              </div>
              <div className="pressure-calc-button">
                <CalculateButton onClick={paTo} />
              </div>
              {/* 
              <input
                id="pressure-calc-button"
                type="button"
                value="calculate"
                onClick={paTo}
              /> */}
            </div>
          </div>

          <div className="pressure_c_c col">
            <div className="pressure_c col">
              <div className="input-group mb-3" id="pressures">
                <input
                  type="text"
                  name="kPa"
                  className="form-control"
                  id="kPa"
                  placeholder="KiloPascal"
                />
                <span className="input-group-text" id="basic-addon5">
                  kPa
                </span>
              </div>
              <div className="pressure-calc-button">
                <CalculateButton onClick={kPaTo} />
              </div>

              {/* <input
                id="pressure-calc-button"
                type="button"
                value="calculate"
                onClick={kPaTo}
              /> */}
            </div>

            <div className="pressure_c col">
              <div className="input-group mb-3" id="pressure">
                <input
                  type="text"
                  name="psi"
                  className="form-control"
                  id="psi"
                  placeholder="Psi"
                />
                <span className="input-group-text" id="basic-addon5">
                  Psi
                </span>
              </div>
              <div className="pressure-calc-button">
                <CalculateButton onClick={psiTo} />
              </div>
              {/* 
              <input
                id="pressure-calc-button"
                type="button"
                value="calculate"
                onClick={psiTo}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function barTo() {
    var barInput = parseFloat(document.getElementById("bar").value);

    var barToKPA = (barInput * 100).toFixed(2);
    var barToPascal = (barInput * 100000).toFixed(2);
    var barToPSI = (barInput * 14.503773773).toFixed(2);

    document.getElementById("kPa").value = barToKPA;
    document.getElementById("pascal").value = barToPascal;
    document.getElementById("psi").value = barToPSI;
  }
  function paTo() {
    var pascalInput = parseFloat(document.getElementById("pascal").value);

    var pascalToKPA = (pascalInput / 1000).toFixed(2);
    var pascalToBar = (pascalInput / 100000).toFixed(2);
    var pascalToPSI = (pascalInput * 0.0001450377).toFixed(2);

    document.getElementById("kPa").value = pascalToKPA;
    document.getElementById("bar").value = pascalToBar;
    document.getElementById("psi").value = pascalToPSI;
  }
  function kPaTo() {
    var kPa = parseFloat(document.getElementById("kPa").value);

    var kPaToBar = (kPa * 0.01).toFixed(2);
    var kPaToPa = (kPa * 1000).toFixed(2);
    var kPaToPSI = (kPa * 0.145037738).toFixed(2);

    document.getElementById("bar").value = kPaToBar;
    document.getElementById("pascal").value = kPaToPa;
    document.getElementById("psi").value = kPaToPSI;
  }
  function psiTo() {
    var psiInput = parseFloat(document.getElementById("psi").value);

    var psiToBar = (psiInput * 0.0689475729).toFixed(2);
    var psiToPascal = (psiInput * 6894.7572932).toFixed(2);
    var psiToKPA = (psiInput * 6.89475729).toFixed(2);

    document.getElementById("bar").value = psiToBar;
    document.getElementById("pascal").value = psiToPascal;
    document.getElementById("kPa").value = psiToKPA;
  }
}
