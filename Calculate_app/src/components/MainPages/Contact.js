import React from "react";
import NavBarComplete from "../Navbar/Navbar";
import "./Contact.css";
import "../MediaQuery/MediaQuery.css";
import "../CalculateButton/CalculateButton.css";
import {
  contactFirstname,
  contactLastname,
  contactEmail,
  contactPhone,
  contactComment,
  submitButton,
} from "../ContactInputs/ContactInputs";

const Contact = () => {
  return (
    <div className="contact-page">
      {<NavBarComplete />}

      <div id="contactBody">
        <div
          id="form-container"
          className="form-container container mt-4 col-md-5"
        >
          <h3 id="form-title1" className="form-title">
            Get in <span id="contactSpan">Touch!</span>
          </h3>
          <form className="form row g-1">
            <div className="col-md-4" id="contact-inputs">
              <div>{contactFirstname}</div>
            </div>
            <div className="col-md-4" id="contact-inputs">
              <div>{contactLastname}</div>
            </div>
            <div className="col-md-4" id="contact-inputs">
              <div>{contactEmail}</div>
            </div>
            <div className="col-md-4" id="contact-inputs">
              <div>{contactPhone}</div>
            </div>
            <div className="col-md-6" id="contact-inputs">
              <div>{contactComment}</div>
            </div>
            <div className="submitbtn col-md-12">{submitButton}</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
