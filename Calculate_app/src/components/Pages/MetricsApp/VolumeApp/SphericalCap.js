import React from "react";
import "./volume.css";
import CalculateButton from "../../../CalculateButton/CalculateButton";

export default function SphericalCap() {
  var volume;
  return (
    <table>
      <tbody>
        <tr>
          <td>Ball Radius</td>
          <td>
            <input type="number" id="spherRadius"></input>
          </td>
        </tr>

        <tr>
          <td>Height</td>
          <td>
            <input type="number" id="spherHeight"></input>
          </td>
        </tr>

        <tr>
          <td colSpan="3">
            <CalculateButton onClick={sphericalCalc} />
          </td>
        </tr>
        <tr>
          <td>Result</td>
          <td>
            <input type="number" id="spherResult"></input>
          </td>
        </tr>
      </tbody>
    </table>
  );

  function sphericalCalc() {
    var sphericalBallRadius = parseInt(
      document.querySelector("#spherRadius").value
    );
    var sphericalHeight = parseInt(
      document.querySelector("#spherHeight").value
    );

    // = 1/3 * πh2(3R - h)

    volume =
      (1 / 3) *
      Math.PI *
      sphericalHeight ** 2 *
      (3 * sphericalBallRadius - sphericalHeight);

    volume = document.getElementById("spherResult").value = volume.toFixed(2);
  }
}
