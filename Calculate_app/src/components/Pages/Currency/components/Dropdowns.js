import React from "react";
import { language } from "../config/language";
import "../Converter/currencyStyle.css";

const label = {
  width: "100px",
  color: "black",
  fontSize: "22px",
  marginTop: "1rem",
  marginBottom: "1rem",
};

function Dropdowns({ labelName, handleChange, value }) {
  return (
    <>
      <label id="currLabels" className="dropdown" style={label}>
        {labelName}
        <select
          id="currSelect"
          className="form-select custom-select form-select-md text-black border-dark shadow"
          value={value}
          onChange={(event) => handleChange(event)}
        >
          {language.map((languages) => (
            <option key={languages.code}>{languages.code}</option>
          ))}
        </select>
      </label>
    </>
  );
}

export default Dropdowns;
