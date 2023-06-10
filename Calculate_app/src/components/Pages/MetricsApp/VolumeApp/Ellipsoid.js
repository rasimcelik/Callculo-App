import React from "react";
import "./volume.css";
import CalculateButton from "../../../CalculateButton/CalculateButton";

export default function Ellipsoid() {
  var volume;
  return (
    <table>
      <tbody>
        <tr>
          <td>Axis 1</td>
          <td>
            <input type="number" id="ellipAx1"></input>
          </td>
        </tr>
        <tr>
          <td>Axis 2</td>
          <td>
            <input type="number" id="ellipAx2"></input>
          </td>
        </tr>
        <tr>
          <td>Axis 3</td>
          <td>
            <input type="number" id="ellipAx3"></input>
          </td>
        </tr>

        <tr>
          <td colSpan="3">
            <CalculateButton onClick={ellipsoidCalc} />
          </td>
        </tr>
        <tr>
          <td>Result</td>
          <td>
            <input type="number" id="ellipResult"></input>
          </td>
        </tr>
      </tbody>
    </table>
  );

  function ellipsoidCalc() {
    var ellipsoidAxis1 = parseInt(document.querySelector("#ellipAx1").value);
    var ellipsoidAxis2 = parseInt(document.querySelector("#ellipAx2").value);
    var ellipsoidAxis3 = parseInt(document.querySelector("#ellipAx3").value);

    //  	4/3	 πabc

    volume =
      (4 / 3) * Math.PI * ellipsoidAxis1 * ellipsoidAxis2 * ellipsoidAxis3;

    document.getElementById("ellipResult").value = volume.toFixed(2);
  }
}
