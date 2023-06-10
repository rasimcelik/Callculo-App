import React from "react";
import CalculateButton from "../../CalculateButton/CalculateButton.js";
import "./TemperatureApp.css";

export default function TemperatureApp() {
  // window.onload = function () {
  //   const celciusInput = document.getElementById("celcius");
  //   const fahrenheitInput = document.getElementById("fahrenheit");
  //   const kelvinInput = document.getElementById("kelvin");

  //   const inputs = document.getElementsByClassName("tempResults");

  //   for (let i = 0; i < inputs.length; i++) {
  //     let input = inputs[i];

  //     input.addEventListener("input", function (e) {
  //       let value = parseFloat(e.target.value);
  //       switch (e.target.name) {
  //         case "celcius":
  //           fahrenheitInput.value = value * 1.8 + 32;
  //           kelvinInput.value = value + 273.15;
  //           if (celciusInput.value === "") {
  //             fahrenheitInput.value = "";
  //             kelvinInput.value = "";
  //           }
  //           break;

  //         case "fahrenheit":
  //           celciusInput.value = (value - 32) / 1.8;
  //           kelvinInput.value = (value - 32) / 1.8 + 273.15;
  //           if (fahrenheitInput.value === "") {
  //             celciusInput.value = "";
  //             kelvinInput.value = "";
  //           }
  //           break;

  //         case "kelvin":
  //           celciusInput.value = value - 273.15;
  //           fahrenheitInput.value = (value - 273.15) * 1.8 + 32;
  //           if (kelvinInput.value === "") {
  //             celciusInput.value = "";
  //             fahrenheitInput.value = "";
  //           }
  //           break;

  //         default:
  //           break;
  //       }
  //     });
  //   }
  // };

  return (
    <div className="temp-outer">
      <div className="area-container-temp">
        <table>
          <tbody>
            <tr>
              <td>Celcius</td>
              <td>
                <input type="text" id="celcius" className="tempResults"></input>
              </td>
              <td>
                <CalculateButton onClick={celciusTo} />
              </td>
            </tr>

            <tr>
              <td>Fahrenheit</td>
              <td>
                <input
                  type="text"
                  id="fahrenheit"
                  className="tempResults"
                ></input>
              </td>
              <td>
                <CalculateButton onClick={fahrenheitTo} />
              </td>
            </tr>

            <tr>
              <td>Kelvin</td>
              <td>
                <input type="text" id="kelvin" className="tempResults"></input>
              </td>
              <td>
                <CalculateButton onClick={kelvinTo} />
              </td>
            </tr>

            <tr></tr>
          </tbody>
        </table>
      </div>
    </div>

    // <div className="tempApp">
    //   <div className="temperature_wrapper">
    //     <div className="temperature_r row">
    //       <div className="temperature_c col">
    //         <span id="tempSpans">Celcius</span>
    //         <hr />
    //         <div className="input-group mb-3">
    //           <input
    //             type="text"
    //             name="celcius"
    //             className="form-control"
    //             id="celcius"
    //             placeholder="Celcius"
    //           />
    //           <span className="input-group-text" id="basic-addon-temp">
    //             ℃
    //           </span>
    //         </div>
    //       </div>

    //       <div className="temperature_c col">
    //         <span id="tempSpans">Fahrenheit</span>

    //         <hr />
    //         <div className="input-group mb-3">
    //           <input
    //             type="text"
    //             name="fahrenheit"
    //             className="form-control"
    //             id="fahrenheit"
    //             placeholder="Fahrenheit"
    //           />
    //           <span className="input-group-text" id="basic-addon-temp">
    //             ℉
    //           </span>
    //         </div>
    //       </div>

    //       <div className="temperature_c col">
    //         <span id="tempSpans">Kelvin</span>

    //         <hr />
    //         <div className="input-group mb-3">
    //           <input
    //             type="text"
    //             name="kelvin"
    //             className="form-control"
    //             id="kelvin"
    //             placeholder="Kelvin"
    //           />
    //           <span className="input-group-text" id="basic-addon-temp">
    //             K
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
  function celciusTo() {
    var celcius = parseFloat(document.getElementById("celcius").value);

    var cToF = (celcius * 1.8 + 32).toFixed(2);
    var cToK = (celcius + 273.15).toFixed(2);

    document.getElementById("fahrenheit").value = cToF;
    document.getElementById("kelvin").value = cToK;
  }
  function fahrenheitTo() {
    var fahrenheit = parseFloat(document.getElementById("fahrenheit").value);

    var fToC = ((fahrenheit - 32) / 1.8).toFixed(2);
    var fToK = ((fahrenheit - 32) / 1.8 + 273.15).toFixed(2);

    document.getElementById("celcius").value = fToC;
    document.getElementById("kelvin").value = fToK;
  }
  function kelvinTo() {
    var kelvin = parseFloat(document.getElementById("kelvin").value);

    var kToC = (kelvin - 273.15).toFixed(2);
    var kToF = ((kelvin - 273.15) * 1.8 + 32).toFixed(2);

    document.getElementById("celcius").value = kToC;
    document.getElementById("fahrenheit").value = kToF;
  }
}
