import React from "react";
import circle from "../img/decor/HypnoElipse.svg";
import leaf1 from "../img/decor/HypnoLeaf1.svg";

import "../styles/stylesComponents/Hypnotherapie.scss";

function Hypnotherapie() {
  return (
    <div className="Hypno">
      <div className="container-fluid">
        <img src={circle} alt="circle" className="Hypno__circle" />
        <img src={leaf1} alt="leaf" className="Hypno__leaf1" />
        <h2 className="Hypno__title">L'hypnothérapie</h2>
      </div>
    </div>
  );
}

export default Hypnotherapie;
