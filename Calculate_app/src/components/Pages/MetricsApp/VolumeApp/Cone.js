import React from "react";
import "./volume.css";
import CalculateButton from "../../../CalculateButton/CalculateButton";

// CSS SPECS SAME WITH THE Capsule.JS
export default function Cone() {
  let volume;
  return (
    <table>
      <tbody>
        <tr>
          <td>Radius</td>
          <td>
            <input type="number" id="coneRadius"></input>
          </td>
        </tr>
        <tr>
          <td>Height</td>
          <td>
            <input type="number" id="coneHeight"></input>
          </td>
        </tr>

        <tr>
          <td colSpan="3">
            <CalculateButton onClick={coneCalc} />
          </td>
        </tr>
        <tr>
          <td>Result</td>
          <td>
            <input type="number" id="coneResult"></input>
          </td>
        </tr>
      </tbody>
    </table>
  );

  function coneCalc() {
    var coneRadius = parseInt(document.querySelector("#coneRadius").value);
    var coneHeight = parseInt(document.querySelector("#coneHeight").value);
    volume = (1 / 3) * Math.PI * coneRadius ** 2 * coneHeight;

    document.getElementById("coneResult").value = volume.toFixed(2);
  }
}
