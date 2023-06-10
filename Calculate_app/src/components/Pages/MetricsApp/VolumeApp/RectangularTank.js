import React from "react";
import "./volume.css";
import CalculateButton from "../../../CalculateButton/CalculateButton";

export default function RectangularTank() {
  var volume;
  return (
    <table>
      <tbody>
        <tr>
          <td>Length</td>
          <td>
            <input type="number" id="recLength"></input>
          </td>
        </tr>
        <tr>
          <td>Width</td>
          <td>
            <input type="number" id="recWidth"></input>
          </td>
        </tr>
        <tr>
          <td>Height</td>
          <td>
            <input type="number" id="recHeigth"></input>
          </td>
        </tr>

        <tr>
          <td colSpan="3">
            <CalculateButton onClick={rectangularCalc} />
          </td>
        </tr>
        <tr>
          <td>Result</td>
          <td>
            <input type="number" id="recResult"></input>
          </td>
        </tr>
      </tbody>
    </table>
  );

  function rectangularCalc() {
    var rectangularLength = parseInt(
      document.querySelector("#recLength").value
    );
    var rectangularWidth = parseInt(document.querySelector("#recWidth").value);
    var rectangularHeight = parseInt(
      document.querySelector("#recHeigth").value
    );
    volume = rectangularLength * rectangularWidth * rectangularHeight;

    document.getElementById("recResult").value = volume.toFixed(2);
  }
}
