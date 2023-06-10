import { React, useState } from "react";
import "./AreaApp.css";

import Area_RectangleApp from "./AreaApps/Area_RectangleApp";
import Area_TriangleApp from "./AreaApps/Area_TriangleApp";
import Area_CircleApp from "./AreaApps/Area_CircleApp";
import Area_SectorApp from "./AreaApps/Area_SectorApp";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const AreaApp = () => {
  const areaBtns = [
    {
      id: 0,
      name: "Rectangle",
      content: <Area_RectangleApp />,
    },
    {
      id: 1,
      name: "Triangle",
      content: <Area_TriangleApp />,
    },
    {
      id: 2,
      name: "Circle",
      content: <Area_CircleApp />,
    },
    {
      id: 3,
      name: "Sector",
      content: <Area_SectorApp />,
    },
  ];
  const [active, setActive] = useState(areaBtns[0]);

  return (
    <div className="Area_App_Outer">
      <div className="Area_App">
        <div id="area-card" className="card text-center">
          <div className="card-header">
            <DropdownButton id="dropdown-basic-button" title={active.name}>
              {areaBtns.map((item) => (
                <Dropdown.Item
                  href="#/action-1"
                  onClick={() => setActive(item)}
                >
                  {item.name}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </div>
          <div className="area-area">{active.content}</div>
        </div>
      </div>
    </div>
  );
};

export default AreaApp;
