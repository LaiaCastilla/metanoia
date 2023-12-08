import React from "react";
import "../styles/stylesComponents/Hero.scss";
import logo from "../logo.svg";

function Hero() {
  return (
    <div className="Hero">
      <div className="Hero__content container-fluid">
        <div className="Hero__content--left">
          <h1 className="Hero__content--title">METANOIA THERAPY</h1>
          <span className="Hero__content--btns">
            {/* two buttons */}
            <button variant="success" className="cta-btn btn">
              Hypnothérapie
            </button>
            <button variant="success" className="cta-btn btn">
              Reiki
            </button>
          </span>
        </div>
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
