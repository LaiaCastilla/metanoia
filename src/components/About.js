import React from "react";
import paint from "../img/decor/AboutPaint.svg";
import leaf1 from "../img/decor/AboutLeaf1.svg";
import leaf2 from "../img/decor/AboutLeaf2.svg";
import eucalipto from "../img/decor/eucalipto.svg";
import leaf3 from "../img/decor/AboutLeaf3.svg";

import "../styles/stylesComponents/About.scss";

function About() {
  return (
    <div className="About">
      <div className="container-fluid">
        <img src={paint} alt="paint" className="About__paint" width="100%" />
        <img src={leaf1} alt="leaf" className="About__leaf1" />
        <img src={leaf2} alt="leaf" className="About__leaf2" />
        <h2 className="About__title">À propos de Metanoia</h2>
        <div className="About__metanoia">
          Metanoia est un concept grec, c’est le voyage consistant à renaitre à
          soi en soi, une conversion mentale et spirituelle vers une meilleure
          version de soi-même
        </div>
      </div>
      <img src={eucalipto} alt="eucalipto" className="About__eucalipto" />
      <div className="About__eucalipto--content container-fluid">
        <h3 className="About__subtitle">Mes accompagnements</h3>
        <div className="About__eucalipto--text">
          <p>
            Je vous accompagne dans votre chemin de vie, dans la résolution des
            problématiques physiques, psychiques et émotionnelles, afin de vous
            permettre la redécouverte de votre être lumineux et authentique.
          </p>
          <div className="About__eucalipto--list">
            <ul>
              <li>Traumatismes</li>
              <li>Libération des schémas</li>
              <li>Stress / Burn-out</li>
              <li>Découverte de soi</li>
              <li>Douleurs / Maladies</li>
            </ul>
            <ul>
              <li>Changement d’habitudes / Croyances</li>
              <li>Confiance en soi</li>
              <li>Détente / Ancrage / Lâcher-prise </li>
              <li>Gestion des émotions</li>
              <li>Harcèlement (scolaire / professionnel)</li>
            </ul>{" "}
            <ul>
              <li>Hypersensibilité</li>
              <li>Digestion</li>
              <li>Sommeil</li>
              <li>...</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-fluid About__suite">
        <h3 className="About__subtitle">
          Hypnothérapie ou reiki? Lequel choisir?
        </h3>
        <div className="About__suite--text">
          <p>
            Le reiki est une pratique énergétique et spirituelle qui se traduit
            par des thérapies brèves visant à apporter une détente immédiate, un
            rééquilibrage énergétique et une harmonisation d’ensemble. Il peut
            également apporter un soulagement dans la réduction de la douleur et
            redonner de l’énergie. <br />
            <br /> L’hypnose est adaptative et se plie aux besoins de la
            personne. Elle peut tout autant être utilisée en thérapie brève ou
            sur une plus longue durée. Elle se calque sur l’évolution de
            l’individus et répond autant au besoin de traiter des traumas, des
            peurs, de se libérer de croyances ou d’addiction, que d’améliorer sa
            confiance en soi, sa capacité de mémorisation, ou ses performances.
          </p>
          <img src={leaf3} alt="leaf" className="About__suite--leaf3" />
        </div>
      </div>
    </div>
  );
}

export default About;
