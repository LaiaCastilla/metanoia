import React from "react";
import logo from "../logo.svg";
import facebook from "../img/logos/facebook.svg";
import instagram from "../img/logos/instagram.svg";

import "../styles/stylesComponents/Footer.scss";

function Footer() {
  return (
    <div className="Footer">
      Footer
      <div className="Footer__logos">
        {" "}
        <a
          href="https://www.facebook.com/"
          title="Mon compte Facebook"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="facebook" width={65} height={65} />
        </a>
        <a
          href="https://www.instagram.com/"
          title="Mon compte Instagram"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="instagram" width={65} />
        </a>
      </div>
      <div className="Footer__signature">
        Conçu et developpé par
        <a href="https://laiacastilla.com/" target="_blank" rel="noreferrer">
          {" "}
          Laia
        </a>
      </div>
    </div>
  );
}

export default Footer;
