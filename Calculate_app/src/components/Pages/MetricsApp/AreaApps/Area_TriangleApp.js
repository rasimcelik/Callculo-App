import React from "react";
import "../metricStyle.css";
import CalculateButton from "../../../CalculateButton/CalculateButton";

const Area_TriangleApp = () => {
  return (
    <div className="area-container">
      <table>
        <tbody>
          <tr>
            <td>Edge 1</td>
            <td>
              <input type="number" id="triEdge1"></input>
            </td>
          </tr>
          <tr>
            <td>Edge 2</td>
            <td>
              <input type="number" id="triEdge2"></input>
            </td>
          </tr>
          <tr>
            <td>Edge 3</td>
            <td>
              <input type="number" id="triEdge3"></input>
            </td>
          </tr>
          <tr>
            <td colSpan="3">
              <CalculateButton onClick={areaoftri} />
            </td>
          </tr>
          <tr>
            <td>Result</td>
            <td>
              <input type="number" id="triResult"></input>
            </td>
          </tr>
        </tbody>
      </table>
      <span id="triangle-span" style={{ color: "lightgrey", fontSize: "14px" }}>
        Please enter your digits in cantimeter
      </span>
    </div>
  );
  function areaoftri() {
    var edge1 = parseInt(document.querySelector("#triEdge1").value);
    var edge2 = parseInt(document.querySelector("#triEdge2").value);
    var edge3 = parseInt(document.querySelector("#triEdge3").value);
    var s = (edge1 + edge2 + edge3) / 2;
    var triarea = parseInt(
      Math.sqrt(s * ((s - edge1) * (s - edge2) * (s - edge3)))
    );
    document.querySelector("#triResult").value = triarea;
  }
};

export default Area_TriangleApp;
