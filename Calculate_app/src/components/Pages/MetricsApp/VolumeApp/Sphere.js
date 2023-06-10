import React from "react";
import "./volume.css";
import CalculateButton from "../../../CalculateButton/CalculateButton";

export default function Sphere() {
  var volume;
  return (
    <table>
      <tbody>
        <tr>
          <td>Radius</td>
          <td>
            <input type="number" id="sphereRadius"></input>
          </td>
        </tr>

        <tr>
          <td colSpan="3">
            <CalculateButton onClick={sphereCalc} />
          </td>
        </tr>
        <tr>
          <td>Result</td>
          <td>
            <input type="number" id="sphereResult"></input>
          </td>
        </tr>
      </tbody>
    </table>
  );

  function sphereCalc() {
    var sphereRadius = parseInt(document.querySelector("#sphereRadius").value);
    volume = (4 / 3) * Math.PI * sphereRadius ** 3;

    document.getElementById("sphereResult").value = volume.toFixed(2);
  }
}
