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
        <div className="Hypno__intro">
          <p className="Hypno__text">
            L'hypnose est un outil formidable qui permet de se libérer du mental
            pour atteindre notre subconscient et notre inconscient qui sont
            l'origine de notre soi. <br /> Dans le cerveau, l'inconscient et le
            subconscient sont liés aux traitements des émotions, des habitudes,
            des croyances, des expériences de vie, de la perception de soi et de
            la mémoire. L'hypnose ouvre une porte vers ce monde intérieur et
            permet, par l'utilisation de suggestions positives ou de métaphores,
            la prise de conscience ou la mise en place de nouveaux systèmes de
            pensées.
          </p>
          <h3 className="Hypno__subtitle">Pour...</h3>
          <p className="Hypno__text">
            Cette pratique est utilisée aussi bien pour réduire et lutter contre
            le stress, pour le traitement des traumatismes, pour la gestion des
            émotions, pour la confiance en soi ou de l'estime de soi, ou encore
            pour surmonter ses peurs et croyances limitantes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hypnotherapie;
