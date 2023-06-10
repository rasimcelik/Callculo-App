import React from "react";
import "./ContactInputs.css";

// const ContactInputs = () => {
//   var username;
//   return (username = (
//     <input placeholder="username" type="text" class="input" required="" />
//   ));
// };

// export default ContactInputs;

export const contactFirstname = (
  <input
    id="contactInputs"
    placeholder="First Name"
    type="text"
    class="input"
    required=""
  />
);

export const contactLastname = (
  <input
    id="contactInputs"
    placeholder="Last Name"
    type="text"
    class="input"
    required=""
  />
);

export const contactEmail = (
  <input
    id="contactInputs"
    placeholder="Email"
    type="text"
    class="input"
    required=""
  />
);

export const contactPhone = (
  <input
    id="contactInputs"
    placeholder="Phone"
    type="text"
    class="input"
    required=""
  />
);

export const contactComment = (
  <textarea
    id="contactInputs"
    placeholder="Comments, Questions?"
    type="text"
    class="input"
    required=""
  />
);

export const submitButton = (
  <button
    style={{ fontSize: "18px", height: "2rem" }}
    // onClick={onClick}
    type="button"
    id="calcbtn"
    class="btn btn-outline-success btn-sm"
    // style={{ transition: "0.4s", fontSize: "15px", border: "dotted 1px" }}
  >
    SUBMIT
  </button>
);
