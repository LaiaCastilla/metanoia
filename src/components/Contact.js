import React from "react";
import olive from "../img/decor/olive.svg";
import leaf1 from "../img/decor/ContactLeaf1.svg";
import leaf2 from "../img/decor/ContactLeaf2.svg";
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
      <div className="contact__background">
        <img src={leaf1} alt="leaf" className="contact__background--leaf1" />
        <img src={leaf2} alt="leaf" className="contact__background--leaf2" />
      </div>
    </div>
  );
}

export default Contact;
