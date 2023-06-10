import React from "react";
import "./LeftPanel.css";

const LeftPanel = (props) => {
  let imgSrc2 = require("../images/body.png");

  return (
    <div>
      <div className="leftPanelImage">
        <img id="leftpanelimage" src={imgSrc2} alt="" />
      </div>
    </div>
  );
};

export default LeftPanel;
