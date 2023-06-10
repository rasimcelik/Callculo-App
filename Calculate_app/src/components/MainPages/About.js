import React from "react";
import NavBarComplete from "../Navbar/Navbar";
import "./About.css";
import about from "../../images/about.jpg";

const About = () => {
  return (
    <div>
      {<NavBarComplete />}

      <div className="container text-center">
        <div className="row align-items-start">
          <div className="col">
            <h3>ABOUT</h3>
          </div>
        </div>
        <div className="row align-items-start">
          <div className="col">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              porttitor quis libero sit amet bibendum. Sed lectus odio, semper
              finibus cursus quis, rutrum nec sem. Donec pulvinar quam et lorem
              tincidunt cursus. Aenean accumsan sed quam a eleifend. Curabitur
              mi turpis, volutpat ac ipsum vulputate, molestie iaculis purus.
            </p>
          </div>
        </div>
        <div className="row align-items-start">
          <div className="col">
            <img className="photo" src={about} />
          </div>
          <div className="col">
            <div className="row align-items-start">
              <h4>Who We Are</h4>
            </div>
            <div className="row align-items-start">
              <p className="who-we-are-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                porttitor quis libero sit amet bibendum. Sed lectus odio, semper
                finibus cursus quis, rutrum nec sem. Donec pulvinar quam et
                lorem tincidunt cursus.
              </p>
            </div>

            <div className="row align-items-start">
              <div className="col">
                <h5>
                  Birthday: <span>1 June 1995</span>
                </h5>
                <h5>
                  Phone: <span>+1 (415) 123-4567</span>
                </h5>
                <h5>
                  City: <span>Toronto, Canada</span>
                </h5>
              </div>
              <div className="col">
                <h5>
                  Degree: <span>Master</span>
                </h5>
                <h5>
                  m@il: <span>mail.test@gmail.com</span>
                </h5>
                <h5>
                  Freelance: <span>Available</span>
                </h5>
              </div>
            </div>

            <div className="row align-items-start">
              <p className="who-we-are-p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                porttitor quis libero sit amet bibendum. Sed lectus odio, semper
                finibus cursus quis, rutrum nec sem. Donec pulvinar quam et
                lorem tincidunt cursus. Aenean accumsan sed quam a eleifend.
                Curabitur mi turpis, volutpat ac ipsum vulputate, molestie
                iaculis purus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
