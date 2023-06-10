import React, { useState } from "react";
import NavBarComplete from "../Navbar/Navbar";
import "./Metrics.css";
import TemperatureApp from "./MetricsApp/TemperatureApp";
import AreaApp from "./MetricsApp/AreaApp";
import WeightApp from "./MetricsApp/WeightApp";
import TimeApp from "./MetricsApp/TimeApp";
import VolumeApp from "./MetricsApp/VolumeApp";
import PercentageApp from "./MetricsApp/PercentageApp";
import LengthApp from "./MetricsApp/LengthApp";
import SpeedApp from "./MetricsApp/SpeedApp";
import PressureApp from "./MetricsApp/PressureApp";

import { motion } from "framer-motion";
import { Wrapper, Tab } from "./MetricsComponents.js";

const Metrics = () => {
  const tabs = [
    {
      id: 0,
      name: "Temperature",
      content: <TemperatureApp />,
    },
    {
      id: 1,
      name: "Area",
      content: <AreaApp />,
    },
    {
      id: 2,
      name: "Weight",
      content: <WeightApp />,
    },
    {
      id: 3,
      name: "Time",
      content: <TimeApp />,
    },
    { id: 4, name: "Volume", content: <VolumeApp /> },
    { id: 5, name: "Percentage", content: <PercentageApp /> },
    { id: 6, name: "Length", content: <LengthApp /> },
    { id: 7, name: "Speed", content: <SpeedApp /> },
    { id: 8, name: "Pressure", content: <PressureApp /> },
  ];
  const [focused, setFocused] = React.useState(null);
  const [selected, setSelected] = React.useState(tabs[0]);

  return (
    <div>
      <NavBarComplete />

      <Wrapper onMouseLeave={() => setFocused(null)}>
        <div className="App_wrapper">
          {tabs.map((item) => (
            <Tab
              id="metric-tabs"
              key={item}
              onClick={() => setSelected(item)}
              onKeyDown={(event: { key: string }) =>
                event.key === "Enter" ? setSelected(item) : null
              }
              onFocus={() => setFocused(item.name)}
              onMouseEnter={() => setFocused(item.name)}
              tabIndex={0}
            >
              <span id="metric-tabs-items">{item.name}</span>
              {focused === item.name ? (
                <motion.div
                  transition={{
                    layout: {
                      duration: 0.3,
                      ease: "easeOut",
                    },
                  }}
                  style={{
                    width: "9rem",
                    height: "110%",
                    background: "#ccffe4",
                    border: "1px solid #42fb92 ",
                    borderRadius: "8px",
                    zIndex: 0,
                  }}
                  layoutId="highlight"
                />
              ) : null}
            </Tab>
          ))}
        </div>
      </Wrapper>
      <div className="active_content">{selected.content}</div>
    </div>
  );
};

export default Metrics;
