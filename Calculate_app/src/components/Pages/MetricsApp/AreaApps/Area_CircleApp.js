import React from "react";
import CalculateButton from "../../../CalculateButton/CalculateButton";
import "./areaStyle.css";

const Area_CircleApp = () => {
  return (
    <div className="area-container">
      <table>
        <tbody>
          <tr>
            <td>Radius</td>
            <td>
              <input type="number" id="circleRadius"></input>
            </td>
          </tr>

          <tr>
            <td colSpan="3">
              <CalculateButton
                className="calculateBtn"
                onClick={areaofcircle}
              />
            </td>
          </tr>
          <tr>
            <td>Result</td>
            <td>
              <input type="number" id="circleResult"></input>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  function areaofcircle() {
    var circleradius = parseInt(document.getElementById("circleRadius").value);
    var area = parseInt(Math.PI * (circleradius * circleradius));

    document.getElementById("circleResult").value = area;
  }
};

export default Area_CircleApp;
