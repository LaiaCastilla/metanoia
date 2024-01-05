import React from "react";
import "../styles/stylesComponents/Hero.scss";
import logo from "../logo.svg";

function Hero(props) {
  function toHypno(event) {
    event.preventDefault();
    props.setPage("hypno");
  }

  function toReiki(event) {
    event.preventDefault();
    props.setPage("reiki");
  }
  return (
    <div className="Hero">
      <div className="Hero__content container-fluid">
        <img
          src={logo}
          alt="Metanoia logo"
          className="Hero__content--logo d-inline-block order-sm-2"
        />
        <div className="Hero__content--left order-sm-1">
          <h1 className="Hero__content--title">METANOIA THERAPY</h1>
          <span className="Hero__content--btns">
            {/* two buttons */}
            <button variant="success" className="cta-btn btn" onClick={toHypno}>
              Hypnothérapie
            </button>
            <button variant="success" className="cta-btn btn" onClick={toReiki}>
              Reiki
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
