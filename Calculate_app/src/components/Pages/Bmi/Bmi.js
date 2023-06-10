import React, { useState } from "react";
import NavBarComplete from "../../Navbar/Navbar";
import "./Bmi.css";
import RightPanel from "./components/RightPanel";
import LeftPanel from "./components/LeftPanel";
import "../Bmi/components/LeftPanel.css";
import "../Bmi/components/RightPanel.css";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Bmi = () => {
  const [move, setMove] = React.useState(false);
  const [show, setShow] = React.useState(false);

  const animation1 = {
    x: move ? -800 : 0,
  };

  const animation2 = {
    y: move ? -480 : "",
    x: move ? 0 : "",
  };
  const transition = {
    delay: 0,
    duration: 2,
  };

  return (
    <div>
      <NavBarComplete />

      <div className="row" id="bmiRow">
        <motion.div
          className="col"
          animate={animation1}
          transition={transition}
          onClick={() => {
            setMove(!move);
            setShow((currentShow) => !currentShow);
          }}
        >
          <LeftPanel />
        </motion.div>

        {show ? (
          <motion.div
            className="col"
            animate={animation2}
            transition={transition}
          >
            <RightPanel />
          </motion.div>
        ) : null}
      </div>
    </div>
  );
};

export default Bmi;
