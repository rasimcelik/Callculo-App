import React from "react";
import "./ToggleButton.css";

const ToggleButton = () => {
  return (
    <div>
      <input type="checkbox" id="toggle_checkbox" />
      <label for="toggle_checkbox">
        <div id="star">
          <div class="star" id="star-1">
            ★
          </div>
          <div class="star" id="star-2">
            ★
          </div>
        </div>
        <div id="moon"></div>
      </label>
    </div>
  );
};

export default ToggleButton;
