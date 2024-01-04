import React from "react";
import circle from "../img/decor/HypnoElipse.svg";
import leaf1 from "../img/decor/HypnoLeaf1.svg";
import hypno from "../img/decor/HypnoPic.svg";
import aeros from "../img/decor/aeros.svg";

import "../styles/stylesComponents/Hypnotherapie.scss";
import Image from "react-bootstrap/Image";

function Hypnotherapie() {
  return (
    <div className="Hypno">
      <div className="container-fluid">
        <Image src={circle} alt="circle" className="Hypno__circle" fluid />
        <Image src={leaf1} alt="leaf" className="Hypno__leaf1" fluid />
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
      <div className="Hypno__aeros">
        <img src={aeros} alt="aeros" />
        <div className="Hypno__aeros--content container-fluid">
          <div className="Hypno__aeros--text ">
            <h3 className="Hypno__subtitle">Déroulement d'une seance</h3>
            <p className="Hypno__text">
              Lors d’une première séance d’anamnèse nous verrons ensemble votre
              problématique et nous établirons un plan de traitement
              thérapeutique adapté à vos souhaits et vos besoins. Ce plan de
              traitement pourra à tout moment évoluer en fonction de vous. Les
              séances d’hypnoses commencent par une mise en relaxation qui va
              induire l’état d’hypnose et qui s’enchainera sur la séance en
              elle-même, avant de revenir en douceur vers le conscient et
              l’instant présent pour un petit échange qui clôture la séance.
              <div className="Hypno__aeros--price">
                <h3 className="Hypno__subtitle">Tarifs</h3>
                <p className="Hypno__price">40 chf / heure</p>
              </div>
            </p>
          </div>
          <img src={hypno} alt="hypno" />
        </div>
      </div>
    </div>
  );
}

export default Hypnotherapie;
