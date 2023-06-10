import React from "react";
import "./Navbar.css";
import "../MediaQuery/MediaQuery.css";
import logo from "../../images/logo.png";
import { BsFacebook, BsTwitter, BsGithub, BsLinkedin } from "react-icons/bs";
import { Container, Form, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBarComplete = () => {
  return (
    <div className="greatest-navbar">
      <Navbar className="navbar-bar" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/Home">
            <img className="logo" alt="" src={logo} />
            <span className="logo-title">
              <span className="logo-call">Call</span>culo
            </span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            className="navbarScrollTab"
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="nav-names me-auto my-2 my-lg-0 mx-auto"
              style={{ maxHeight: "200px" }}
              navbarScroll
            >
              <Nav.Link className="link-titles" as={Link} to="/Home">
                Home
              </Nav.Link>
              {/* <Nav.Link className="link-titles" as={Link} to="/about">
                About
              </Nav.Link> */}
              <Nav.Link className="link-titles" as={Link} to="/Contact">
                Contact
              </Nav.Link>
            </Nav>
            <Form className="social d-flex ">
              <ul className="navbar-nav sm-icons mx-auto flex-row justify-content-center ">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="facebook-logo"
                    href="https://www.facebook.com"
                  >
                    <BsFacebook size={22} />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="twitter-logo"
                    href="https://twitter.com"
                  >
                    <BsTwitter size={22} />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="github-logo"
                    href="https://github.com"
                  >
                    <BsGithub size={22} />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="in-logo"
                    href="https://linkedin.com"
                  >
                    <BsLinkedin size={22} />
                  </a>
                </li>
              </ul>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarComplete;
