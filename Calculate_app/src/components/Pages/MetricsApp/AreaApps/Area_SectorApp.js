import React from "react";
import "../metricStyle.css";
import CalculateButton from "../../../CalculateButton/CalculateButton";

const Area_SectorApp = () => {
  return (
    <div className="area-container">
      <table>
        <tbody>
          <tr>
            <td>Radius</td>
            <td>
              <input type="number" id="sectorRadius"></input>
            </td>
          </tr>
          <tr>
            <td>Angle</td>
            <td>
              <input type="number" id="sectorAngle"></input>
            </td>
          </tr>

          <tr>
            <td colSpan="3">
              <CalculateButton onClick={areaofsector} />
            </td>
          </tr>
          <tr>
            <td>Result</td>
            <td>
              <input type="number" id="sectorResult"></input>
            </td>
          </tr>
        </tbody>
      </table>
      <span id="triangle-span" style={{ color: "lightgrey", fontSize: "14px" }}>
        Calculating the Area with a Known
        <br /> Central Angle and Radius
      </span>
    </div>
  );

  function areaofsector() {
    var sectorrad = parseInt(document.getElementById("sectorRadius").value);
    var sectorang = parseInt(document.getElementById("sectorAngle").value);
    var area = parseInt(sectorrad * sectorrad * Math.PI * (sectorang / 360));

    document.getElementById("sectorResult").value = area;
  }
};

export default Area_SectorApp;
