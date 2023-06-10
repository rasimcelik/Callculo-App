import React from "react";
import "./volume.css";
import CalculateButton from "../../../CalculateButton/CalculateButton";

export default function SquarePyramid() {
  var volume;
  return (
    <table>
      <tbody>
        <tr>
          <td>Edge</td>
          <td>
            <input type="number" id="sqPyEdge"></input>
          </td>
        </tr>

        <tr>
          <td>Height</td>
          <td>
            <input type="number" id="sqPyHeight"></input>
          </td>
        </tr>

        <tr>
          <td colSpan="3">
            <CalculateButton onClick={sqPyCalc} />
          </td>
        </tr>
        <tr>
          <td>Result</td>
          <td>
            <input type="number" id="sqPyResult"></input>
          </td>
        </tr>
      </tbody>
    </table>
  );

  function sqPyCalc() {
    var sqPyEdge = parseInt(document.querySelector("#sqPyEdge").value);
    var sqPyHeight = parseInt(document.querySelector("#sqPyHeight").value);

    // V = 1/3 * a2h

    volume = (1 / 3) * sqPyEdge ** 2 * sqPyHeight;

    document.getElementById("sqPyResult").value = volume.toFixed(2);
  }
}
