import React from "react";
import "./volume.css";
import CalculateButton from "../../../CalculateButton/CalculateButton";

export default function ConicalFrustum() {
  var volume;
  return (
    <table>
      <tbody>
        <tr>
          <td>Top Radius</td>
          <td>
            <input type="number" id="frustTop"></input>
          </td>
        </tr>
        <tr>
          <td>Bottom Radius</td>
          <td>
            <input type="number" id="frustBottom"></input>
          </td>
        </tr>

        <tr>
          <td>Height</td>
          <td>
            <input type="number" id="frustHeight"></input>
          </td>
        </tr>

        <tr>
          <td colSpan="3">
            <CalculateButton onClick={conicalCalc} />
          </td>
        </tr>
        <tr>
          <td>Result</td>
          <td>
            <input type="number" id="frustResult"></input>
          </td>
        </tr>
      </tbody>
    </table>
  );

  function conicalCalc() {
    var conicalTopRadius = parseInt(document.querySelector("#frustTop").value);
    var conicalBottomRadius = parseInt(
      document.querySelector("#frustBottom").value
    );
    var conicalHeight = parseInt(document.querySelector("#frustHeight").value);

    // (1/3) * π*h*(r**2 + r**R + R**2)

    volume =
      (1 / 3) *
      Math.PI *
      conicalHeight *
      (conicalTopRadius ** 2 +
        conicalTopRadius ** conicalBottomRadius +
        conicalBottomRadius ** 2);

    document.getElementById("frustResult").value = volume.toFixed(2);
  }
}
