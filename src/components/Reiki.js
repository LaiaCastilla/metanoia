import React from "react";
import circle from "../img/decor/HypnoElipse.svg";
import leaf1 from "../img/decor/ReikiLeaf1.svg";
import leaf2 from "../img/decor/ReikiLeaf2.svg";

import "../styles/stylesComponents/Reiki.scss";
import Image from "react-bootstrap/Image";

function Reiki() {
  return (
    <div className="Reiki">
      <div className="container-fluid">
        <Image src={circle} alt="circle" className="Reiki__circle" fluid />
        <Image src={leaf1} alt="leaf" className="Reiki__leaf1" fluid />
        <Image src={leaf2} alt="leaf" className="Reiki__leaf2" fluid />
        <h2 className="Reiki__title">Le Reiki</h2>
      </div>
    </div>
  );
}

export default Reiki;
