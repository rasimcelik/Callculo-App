import React from "react";
import "./volume.css";
import CalculateButton from "../../../CalculateButton/CalculateButton";

export default function TubeVolume() {
  var volume;
  return (
    <table>
      <tbody>
        <tr>
          <td>Outer Diameter (d1)</td>
          <td>
            <input type="number" id="tubed1"></input>
          </td>
        </tr>
        <tr>
          <td>Inner Diameter (d2)</td>
          <td>
            <input type="number" id="tubed2"></input>
          </td>
        </tr>

        <tr>
          <td>Length</td>
          <td>
            <input type="number" id="tubeLength"></input>
          </td>
        </tr>

        <tr>
          <td colSpan="3">
            <CalculateButton onClick={tubeCalc} />
          </td>
        </tr>
        <tr>
          <td>Result</td>
          <td>
            <input type="number" id="tubeResult"></input>
          </td>
        </tr>
      </tbody>
    </table>
  );

  function tubeCalc() {
    var tubeDia1 = parseInt(document.querySelector("#tubed1").value);
    var tubeDia2 = parseInt(document.querySelector("#tubed2").value);
    var tubeLength = parseInt(document.querySelector("#tubeLength").value);

    // V = 1/3 * a2h

    volume = Math.PI * ((tubeDia1 ** 2 - tubeDia2 ** 2) / 4) * tubeLength;
    volume *= -1;

    document.getElementById("tubeResult").value = volume.toFixed(2);
  }
}
