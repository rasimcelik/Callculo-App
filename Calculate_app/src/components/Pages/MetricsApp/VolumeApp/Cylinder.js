import React from "react";
import "./volume.css";
import CalculateButton from "../../../CalculateButton/CalculateButton";

export default function Cylinder() {
  var volume;
  return (
    <table>
      <tbody>
        <tr>
          <td>Base Radius</td>
          <td>
            <input type="number" id="cylRadius"></input>
          </td>
        </tr>
        <tr>
          <td>Height</td>
          <td>
            <input type="number" id="cylHeight"></input>
          </td>
        </tr>

        <tr>
          <td colSpan="3">
            <CalculateButton onClick={cylinderCalc} />
          </td>
        </tr>
        <tr>
          <td>Result</td>
          <td>
            <input type="number" id="cylinderResult"></input>
          </td>
        </tr>
      </tbody>
    </table>
  );

  function cylinderCalc() {
    var cylinderRadius = parseInt(document.querySelector("#cylRadius").value);
    var cylinderHeight = parseInt(document.querySelector("#cylHeight").value);
    volume = Math.PI * cylinderRadius ** 2 * cylinderHeight;

    document.getElementById("cylinderResult").value = volume.toFixed(2);
  }
}
