import React from "react";
import "./CalculateButton.css";

const CalculateButton = ({ onClick }) => {
  return (
    <div>
      {/* <input
        onClick={onClick}
        type="button"
        value="Calculate"
        className="btn-98"
      /> */}
      <button
        onClick={onClick}
        value="Calculate"
        type="button"
        id="calcbtn"
        class="btn btn-outline-success btn-sm"
        // style={{ transition: "0.4s", fontSize: "15px", border: "dotted 1px" }}
      >
        Calculate
      </button>
    </div>
  );
};

export default CalculateButton;
