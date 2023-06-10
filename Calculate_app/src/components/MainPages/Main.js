import React from "react";
import NavBarComplete from "../Navbar/Navbar";
import "./Main.css";
import "../MediaQuery/MediaQuery.css";
import { Container, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FcCalculator } from "react-icons/fc";
import { BsThermometerSun } from "react-icons/bs";
import { FcCurrencyExchange } from "react-icons/fc";
import { BiBody } from "react-icons/bi";

const Main = () => {
  return (
    <div className="App">
      {<NavBarComplete />}

      <Container>
        <div class="d-flex justify-content-center">
          <Row className="row-1">
            <div className="a container w-50 mt-5 p-4">
              <div id="number-icon">🔢</div>
              <hr />
              <p id="index-p">
                This is simple calculation app which you can find many elements
                inside of it. You can just click any button there below to start
                your calculation
              </p>
              <hr />
              <span id="index-span">Welcome you to enter your numbers</span>
            </div>
          </Row>
        </div>

        <div className="button-area">
          <ul className="button-area-ul">
            <li className="button-area-li">
              <button className="button-rad">
                <Nav.Link as={Link} to="/Calculator" id="main-button">
                  <FcCalculator /> Calculator
                </Nav.Link>
              </button>
            </li>
            <li>
              <button className="button-rad">
                <Nav.Link as={Link} to="/Metrics" id="main-button">
                  <BsThermometerSun /> metrics
                </Nav.Link>
              </button>
            </li>
            <li>
              <button className="button-rad">
                <Nav.Link as={Link} to="/Currency" id="main-button">
                  <FcCurrencyExchange /> currency
                </Nav.Link>
              </button>
            </li>
            <li>
              <button className="button-rad">
                <Nav.Link as={Link} to="/Bmi" id="main-button">
                  <BiBody /> bmi
                </Nav.Link>
              </button>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Main;
