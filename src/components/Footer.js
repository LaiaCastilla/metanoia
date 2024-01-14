import React from "react";
import logo from "../logo.svg";
import metanoia from "../metanoia.svg";
import facebook from "../img/logos/facebook.svg";
import instagram from "../img/logos/instagram.svg";

import "../styles/stylesComponents/Footer.scss";

function Footer() {
  return (
    <div className="Footer container-fluid">
      <div className="Footer__content">
        <div className="Footer__content--logo">
          <img src={metanoia} alt="metanoia therapy" />
        </div>
        <div className="Footer__content--text">
          <h2 className="Footer__title">METANOIA THERAPY</h2>
          <ul className="Footer__list">
            <li>
              <img src={logo} alt="logo BP" className="Footer__list--bp" />
              076 510 85 07
            </li>
            <li>
              <img src={logo} alt="logo BP" className="Footer__list--bp" />
              metanoia-therapy@outlook.com
            </li>
            <li>
              <img src={logo} alt="logo BP" className="Footer__list--bp" />
              Genève centre ville
            </li>
          </ul>
        </div>
      </div>

      <div className="Footer__logos">
        {" "}
        <a
          href="https://www.facebook.com/profile.php?id=61552759357936/"
          title="Mon compte Facebook"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="facebook" width={65} height={65} />
        </a>
        <a
          href="https://www.instagram.com/metanoia_therapy_/"
          title="Mon compte Instagram"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="instagram" width={65} />
        </a>
      </div>

      <div className="Footer__signature">
        Conçu et developpé par
        <a
          href="https://laiacastilla.com/"
          target="_blank"
          rel="noreferrer"
          title="le portfolio de la développeuse"
        >
          {" "}
          Laia
        </a>
      </div>
    </div>
  );
}

export default Footer;
