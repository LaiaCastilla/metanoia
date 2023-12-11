import React from "react";
import olive from "../img/decor/olive.svg";
import "../styles/stylesComponents/Contact.scss";

function Contact() {
  return (
    <div className="contact">
      <div className="citation">
        {/* <figure className="image position-relative"> */}
        <img
          src={olive}
          alt="olive"
          className="citation__olive img-fluid"
          width="100%"
        />
        <div className="citation__text">
          “Vous êtes le plus beau projet sur lequel vous pouvez travailler.”
        </div>
        {/* put this text over the image */}
        {/* <figcaption className="citation__text">
            “Vous êtes le plus beau projet sur lequel vous pouvez travailler.”
          </figcaption> */}
        {/* </figure> */}
      </div>
    </div>
  );
}

export default Contact;
