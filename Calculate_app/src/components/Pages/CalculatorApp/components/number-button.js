import React from "react";
import styles from "./number-button.module.css";
import "../../../MediaQuery/MediaQuery.css";

function Button({ label, real, onClick, classes = [] }) {
  const classNames = [styles.button, ...classes.map((cls) => styles[cls])];

  return (
    <button
      onClick={() => onClick?.({ label, real })}
      className={classNames.join(" ")}
    >
      <span>{label}</span>
    </button>
  );
}

export default Button;
