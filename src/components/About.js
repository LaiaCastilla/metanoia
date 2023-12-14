import React from "react";
import paint from "../img/decor/AboutPaint.svg";
import leaf1 from "../img/decor/AboutLeaf1.svg";
import leaf2 from "../img/decor/AboutLeaf2.svg";
import "../styles/stylesComponents/About.scss";

function About() {
  return (
    <div className="About container-fluid">
      <img src={paint} alt="paint" className="About__paint" width="100%" />
      <img src={leaf1} alt="leaf" className="About__leaf1" />
      <img src={leaf2} alt="leaf" className="About__leaf2" />
      <h2 className="About__title">À propos de Metanoia</h2>
    </div>
  );
}

export default About;
