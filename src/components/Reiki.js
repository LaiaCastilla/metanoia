import React from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";

import circle from "../img/decor/HypnoElipse.svg";
import leaf1 from "../img/decor/ReikiLeaf1.svg";
import leaf2 from "../img/decor/ReikiLeaf2.svg";

import "../styles/stylesComponents/Reiki.scss";
import Image from "react-bootstrap/Image";

function Reiki() {
  return (
    <div className="Reiki">
      <div className="container-fluid">
        <Image src={leaf1} alt="leaf" className="Reiki__leaf1" fluid />
        <Image src={leaf2} alt="leaf" className="Reiki__leaf2" fluid />
        <h2 className="Reiki__title">Le Reiki</h2>
        <div className="Reiki__intro">
          <div className="Reiki__intro--text">
            <p className="Reiki__text">
              Le Reiki est un soin énergétique japonais qui peut se pratiquer
              par apposition des mains sur le corps ou à distance. Il se
              pratique aussi bien sur les humains que sur les animaux. <br />
              Cette technique de soin a été créée par Mikao Usui, un moine
              bouddhiste japonais né en 1865. De ce que l’on connait de lui,
              c'est au début des années 1920 qu'il fonda son centre de guérison
              et forma 17 maitres qui donnèrent naissance à plusieurs lignées
              Reiki. <br />
              <br />
              Le Reiki Usui que nous connaissons en Occident, provient de
              Chijuro Hayashi (élève de Mikao Usui) qui forma à son tour Hawayo
              Takata, qui fut à l'origine de sa large diffusion en Occident.{" "}
              <br />
              <br />
              C'est lors d'une retraite méditative que Mikao Usui eut une
              révélation sur sa capacité à prodiguer des soins et sur le pouvoir
              guérisseur de l'énergie universelle. <br />
              Mais l'énergie qu'est-ce que c'est ? <br />
              <br />
              Tout ce qui existe est énergie, la terre, l'eau, les êtres
              vivants, l'univers. La matière n'est ni plus ni moins que de
              l'énergie vibrant à une certaine fréquence. Le Reiki aide à
              rééquilibrer cette fréquence énergétique pour nous apporter un
              meilleur équilibre qui favorisera notre processus de guérison.
            </p>
          </div>
          <div className="Reiki__usui">
            <Image src={circle} alt="circle" className="Reiki__circle" fluid />
            <div className="Reiki__usui--content">
              <div className="Reiki__usui--title">Juste pour aujourd'hui,</div>
              <div className="Reiki__usui--carousel">
                <Carousel controls={false} indicators={false} pause="hover">
                  <CarouselItem interval={3000}>
                    libère-toi de toute colère
                  </CarouselItem>
                  <CarouselItem interval={3000}>
                    libère-toi de tout souci
                  </CarouselItem>
                  <CarouselItem interval={3000}>
                    fais preuve de gratitude
                  </CarouselItem>
                  <CarouselItem interval={3000}>agis de ton mieux</CarouselItem>
                  <CarouselItem interval={3000}>
                    sois bon envers toi-même et envers autrui
                  </CarouselItem>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <div className="Reiki__intro2">
          <h3 className="Reiki__subtitle">Pour...</h3>
          <p className="Reiki__text">
            Au niveau physique il apporte : détente musculaire, soulagement des
            tensions et est efficace pour traiter les douleurs.
            <br /> Au niveau émotionnel et mental il apporte : la libération et
            gestion des émotions. Il favorise le détachement et apaise le
            mental.
            <br /> Au niveau spirituel il apporte : un développement de la
            conscience spirituelle et favorise la connexion à notre être.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Reiki;
