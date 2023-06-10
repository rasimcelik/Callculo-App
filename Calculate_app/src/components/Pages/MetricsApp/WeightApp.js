import { useState, React } from "react";
import "./WeightApp.css";

import Kg from "./WeightApps/Kg";
import Gr from "./WeightApps/Gr";
import Pound from "./WeightApps/Pound";
import Ounce from "./WeightApps/Ounce";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const WeightApp = () => {
  const weightButtons = [
    {
      id: 0,
      name: "Kilogram",
      content: <Kg />,
    },
    {
      id: 1,
      name: "Gram",
      content: <Gr />,
    },
    {
      id: 2,
      name: "LBS",
      content: <Pound />,
    },
    {
      id: 3,
      name: "Ounce",
      content: <Ounce />,
    },
  ];
  const [active, setActive] = useState(weightButtons[0]);

  return (
    <div className="outer-weight-app">
      <div className="Weight_App">
        <div id="weight-card" className="card text-center">
          <div className="card-header">
            <DropdownButton id="dropdown-basic-button" title={active.name}>
              {weightButtons.map((item) => (
                <Dropdown.Item
                  href="#/action-1"
                  onClick={() => setActive(item)}
                >
                  {item.name}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </div>
          <div className="card-body">{active.content}</div>
        </div>
      </div>
    </div>
  );
};

export default WeightApp;
