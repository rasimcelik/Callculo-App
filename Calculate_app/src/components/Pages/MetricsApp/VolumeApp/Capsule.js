import React from "react";
import "./volume.css";
import CalculateButton from "../../../CalculateButton/CalculateButton";

export default function Capsule() {
  var volume;
  return (
    <table>
      <tbody>
        <tr>
          <td>Radius</td>
          <td>
            <input type="number" id="capsRadius"></input>
          </td>
        </tr>

        <tr>
          <td>Height</td>
          <td>
            <input type="number" id="capsHeight"></input>
          </td>
        </tr>
        <td colSpan="3"></td>

        <tr>
          <td
            colSpan="3
          "
          >
            <CalculateButton onClick={capsuleCalc} />
          </td>
        </tr>

        <tr>
          <td>Result</td>
          <td>
            <input type="number" id="capsResult"></input>
          </td>
        </tr>
      </tbody>
    </table>
  );

  function capsuleCalc() {
    var capsuleRadius = parseInt(document.querySelector("#capsRadius").value);
    var capsuleHeight = parseInt(document.querySelector("#capsHeight").value);
    volume =
      (4 / 3) * Math.PI * capsuleRadius ** 3 +
      Math.PI * capsuleRadius ** 2 * capsuleHeight;

    document.getElementById("capsResult").value = volume.toFixed(2);
  }
}
