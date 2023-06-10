import React from "react";
import CalculateButton from "../../CalculateButton/CalculateButton";

const PercentageApp = () => {
  let result;
  let resultt;
  return (
    <div>
      <div className="element1">
        <div className="card">
          <div className="card-header">Calculator 1</div>
          <div className="card-body">
            <table>
              <tbody>
                <tr>
                  <td>What is</td>
                  <td>
                    <input
                      className="percentageInputs"
                      type="number"
                      id="tubed1"
                    ></input>
                  </td>
                  <td>% of</td>
                  <td>
                    <input
                      className="percentageInputs"
                      type="number"
                      id="tubed2"
                    ></input>
                  </td>
                  <td>Result</td>
                  <td>
                    <input
                      className="percentageInputs"
                      type="number"
                      id="tubeResult"
                    ></input>
                    <span className="res">%</span>
                  </td>
                </tr>

                <tr>
                  <td colSpan="10">
                    <CalculateButton onClick={percResult} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="element2">
        <div className="card">
          <div className="card-header">Calculator 2</div>
          <div className="card-body">
            <table>
              <tbody>
                <tr>
                  <td>What is</td>
                  <td>
                    <input
                      className="percentageInputs"
                      type="number"
                      id="tubed2-1"
                    ></input>
                  </td>
                  <td>% of</td>
                  <td>
                    <input
                      className="percentageInputs"
                      type="number"
                      id="tubed2-2"
                    ></input>
                  </td>
                  <td>Result</td>
                  <td>
                    <input
                      className="percentageInputs"
                      type="number"
                      id="tubeResult2"
                    ></input>
                    <span className="res">%</span>
                  </td>
                </tr>

                <tr>
                  <td colSpan="10">
                    <CalculateButton onClick={percResult2} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
  function percResult() {
    var percFirstVar = parseInt(document.querySelector("#tubed1").value);
    var percSecondVar = parseInt(document.querySelector("#tubed2").value);

    result = percSecondVar * (percFirstVar / 100);
    document.getElementById("tubeResult").value = result.toFixed(2);
  }

  function percResult2() {
    var percFirstVar2 = parseInt(document.querySelector("#tubed2-1").value);
    var percSecondVar2 = parseInt(document.querySelector("#tubed2-2").value);

    resultt = percFirstVar2 / percSecondVar2;
    document.getElementById("tubeResult2").value = resultt.toFixed(2);
  }
};

export default PercentageApp;
