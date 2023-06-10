import React from "react";
import "./volume.css";
import CalculateButton from "../../../CalculateButton/CalculateButton";

export default function Cube() {
  var volume;
  return (
    <table>
      <tbody>
        <tr>
          <td>Edge Length</td>
          <td>
            <input type="number" id="cubeLength"></input>
          </td>
        </tr>

        <tr>
          <td colSpan="3">
            <CalculateButton onClick={cubeCalc} />
          </td>
        </tr>
        <tr>
          <td>Result</td>
          <td>
            <input type="number" id="cubeResult"></input>
          </td>
        </tr>
      </tbody>
    </table>
  );

  function cubeCalc() {
    var cubeLength = parseInt(document.querySelector("#cubeLength").value);
    volume = cubeLength ** 3;

    document.getElementById("cubeResult").value = volume.toFixed(2);
  }
}
