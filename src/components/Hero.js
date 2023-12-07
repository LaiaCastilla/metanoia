import React from "react";
import "../styles/stylesComponents/Hero.scss";
import logo from "../logo.svg";

function Hero() {
  return (
    <div className="Hero">
      <div className="Hero__content container-fluid">
        <h1 className="Hero__content--title">METANOIA THERAPY</h1>
        <img
          src={logo}
          alt="Metanoia logo"
          width="390"
          height="390"
          className="Hero__content--logo d-inline-block"
        />
      </div>
    </div>
  );
}

export default Hero;
