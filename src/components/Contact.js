import React from "react";
import olive from "../img/decor/olive.png";
import leaf1 from "../img/decor/ContactLeaf1.svg";
import leaf2 from "../img/decor/ContactLeaf2.svg";
import paint from "../img/decor/ContactPaint.svg";
import audrey from "../img/Audrey.png";
import facebook from "../img/logos/facebook.svg";
import instagram from "../img/logos/instagram.svg";

import "../styles/stylesComponents/Contact.scss";

export default function Contact() {
  return (
    <div className="contact">
      {/* <div className="citation">
        <img
          src={olive}
          alt="olive"
          className="citation__olive img-fluid"
          width="100%"
        />
        <div className="citation__text">
          “Vous êtes le plus beau projet sur lequel vous pouvez travailler.”
        </div>
      </div> */}
      <div className="contact__content container-fluid">
        <img
          src={paint}
          alt="paint"
          className="contact__content--paint"
          width="100%"
        />
        <img src={leaf1} alt="leaf" className="contact__content--leaf1" />
        <img src={leaf2} alt="leaf" className="contact__content--leaf2" />{" "}
        <h2 className="contact__content--title">Hello et bienvenue</h2>
        <div className="contact__content--text">
          <div className="contact__content--text-paragraph order-xl-2">
            Je m’appelle Audrey et je vous invite ici à découvrir mon parcours
            et la profondeur de mon engagement envers le bien-être des autres.
            Me voilà dans cette nouvelle incarnation où mon âme, forgée par des
            années d&#39;expériences et de leçons de vie ma guidée vers une voie
            empreinte de compassion et de guérison.
            <br /> <br />
            J’ai parcouru un chemin marqué par la découverte de moi-même, des
            autres, du monde visible et invisible et de ma véritable mission de
            vie. Il est fascinant de voir comment, dès mon enfance, je
            nourrissais le rêve de soulager les &quot;bobos du monde&quot; en
            envisageant une carrière médicale. Cependant, l&#39;Univers, dans sa
            sagesse infinie, m&#39;a orientée vers une voie plus adaptée à mon
            essence profonde.
            <br /> <br /> Les détours de la vie m&#39;ont conduite vers des
            études de commerce, un domaine qui, curieusement, n&#39;a pas
            éloigné mon âme de sa trajectoire initiale. Mes postes dans des
            services publics et des structures sociales et de soins ont été
            autant d&#39;opportunités pour développer mon empathie
            bienveillante, ma capacité d&#39;écoute et mon désir sincère
            d&#39;apporter une aide significative. <br /> <br />
            Le moment charnière de ma transformation s&#39;est produit en 2023,
            lorsque j’ai ressenti le besoin impérieux de m&#39;aligner davantage
            avec ma véritable essence. Le constat que je n&#39;étais pas
            pleinement épanouie a été le catalyseur qui m&#39;a poussée à
            entreprendre une formation de praticienne en Reiki Usui et
            d&#39;hypnothérapeute en hypnose Ericksonienne. Cette décision m’a
            révélée une nécessité profonde d&#39;aborder la guérison de manière
            holistique, en tenant compte de l&#39;ensemble de l&#39;être. <br />{" "}
            <br /> Ainsi est née Metanoia Therapy, la fusion de différentes
            techniques thérapeutiques dans ma pratique reflète ma vision
            intégrale de la guérison, où le corps, l&#39;esprit et l&#39;âme
            sont pris en considération. Et c’est ensemble que nous écrirons la
            suite de l’histoire…
            <br /> <br />
            Formations :
            <br /> <br />
            Diplôme d’hypnothérapeute, Ecole Temet Nosce agréé par l’ASCA
            <br />
            Certificat de maître praticienne en Reiki, Formatrice Estelle
            Buonomo, prends -soin- de-toi
          </div>
          <img
            src={audrey}
            alt="audrey"
            className="contact__content--text-Img order-xl-1"
          />
        </div>
        {/* <div className="contact__footer">
          <div className="contact__footer--email">
            <a
              href="mailto:metanoia-therapy@outlook.com"
              title="Envoyer un mail"
            >
              metanoia-therapy@outlook.com
            </a>
          </div>
          <div className="contact__footer--logos">
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
          <div className="signature">
            Conçu et developpé par
            <a
              href="https://laiacastilla.com/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Laia
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}
