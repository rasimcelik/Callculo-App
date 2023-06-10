import { useState, React } from "react";
import "./VolumeApp.css";

import Sphere from "./VolumeApp/Sphere";
import Cone from "./VolumeApp/Cone";
import Cube from "./VolumeApp/Cube";
import Cylinder from "./VolumeApp/Cylinder";
import RectangularTank from "./VolumeApp/RectangularTank";
import Capsule from "./VolumeApp/Capsule";
import SphericalCap from "./VolumeApp/SphericalCap";
import ConicalFrustum from "./VolumeApp/ConicalFrustum";
import Ellipsoid from "./VolumeApp/Ellipsoid";
import SquarePyramid from "./VolumeApp/SquarePyramid";
import TubeVolume from "./VolumeApp/TubeVolume";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const VolumeApp = () => {
  const volumeBtns = [
    {
      id: 0,
      name: "Sphere",
      content: <Sphere />,
    },
    {
      id: 1,
      name: "Cone",
      content: <Cone />,
    },
    {
      id: 2,
      name: "Cube",
      content: <Cube />,
    },
    {
      id: 3,
      name: "Cylinder",
      content: <Cylinder />,
    },
    {
      id: 4,
      name: "Rectangular Tank",
      content: <RectangularTank />,
    },
    {
      id: 5,
      name: "Capsule",
      content: <Capsule />,
    },
    {
      id: 6,
      name: "Spherical Cap",
      content: <SphericalCap />,
    },
    {
      id: 7,
      name: "Conical Frustum",
      content: <ConicalFrustum />,
    },
    {
      id: 8,
      name: "Ellipsoid",
      content: <Ellipsoid />,
    },
    {
      id: 9,
      name: "Square Pyramid",
      content: <SquarePyramid />,
    },
    {
      id: 10,
      name: "Tube Volume",
      content: <TubeVolume />,
    },
  ];
  const [active, setActive] = useState(volumeBtns[0]);

  return (
    <div className="Volume_App">
      <div className="inner_window">
        <div className="card text-center" id="volume-wrapper">
          <div className="card-header">
            <DropdownButton id="dropdown-basic-button" title={active.name}>
              {volumeBtns.map((item) => (
                <Dropdown.Item
                  href="#/action-1"
                  onClick={() => setActive(item)}
                >
                  {item.name}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </div>
          <div className="card-body" id="active-content">
            {active.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolumeApp;
