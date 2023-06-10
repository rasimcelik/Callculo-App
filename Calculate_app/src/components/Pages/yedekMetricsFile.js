import React from "react";
import NavBarComplete from "../Navbar/Navbar";
import TemperatureApp from "./MetricsApp/TemperatureApp";
import AreaApp from "./MetricsApp/AreaApp";
import WeightApp from "./MetricsApp/WeightApp";
import "./Metrics.css";

const Metrics = () => {
  const APP_BUTTONS = [
    {
      id: 0,
      name: "Temperature",
      target: "#temperature_collapse",
    },
    { id: 1, name: "Area", target: "#area_collapse" },
    { id: 2, name: "Weight", target: "#weight_collapse" },
    { id: 3, name: "Time" },
    { id: 4, name: "Volume" },
    { id: 5, name: "Angle" },
    { id: 6, name: "Length" },
    { id: 7, name: "Speed" },
    { id: 8, name: "Pressure" },
  ];
  const list_of_app_buttons = APP_BUTTONS.map((name) => (
    <button
      className="btn btn-primary"
      type="button"
      data-toggle="collapse"
      aria-expanded="false"
      data-target={name.target}
    >
      {name.name}
    </button>
  ));

  return (
    <div>
      <NavBarComplete />
      <div className="wrapper">
        <div className="container">
          {/* APP BUTONLARININ OLDUĞU NAVIGASYON KISMI  */}
          <div className="nav_app_buttons">{list_of_app_buttons}</div>

          {/* APP BUTONLARININ CLICK => AÇILACAK COLLAPSED KISMI  */}
          <div className="col">
            {/* TEMPERATURE COLLAPSED KISMI */}
            <div className="collapse multi-collapse" id="temperature_collapse">
              <div className="card card-body">
                <TemperatureApp />
              </div>
            </div>
            {/* AREA COLLAPSED KISMI */}
            <div className="collapse multi-collapse" id="area_collapse">
              <div className="card card-body">
                <AreaApp />
              </div>
            </div>
            {/* WEIGHT COLLAPSED KISMI */}
            <div className="collapse multi-collapse" id="weight_collapse">
              <div className="card card-body">
                <WeightApp />
              </div>
            </div>
          </div>
        </div>
      </div>
      Metrics
    </div>
  );
};

export default Metrics;
