import React from "react";
import olive from "../img/decor/olive.svg";
import leaf1 from "../img/decor/ContactLeaf1.svg";
import leaf2 from "../img/decor/ContactLeaf2.svg";
import paint from "../img/decor/ContactPaint.svg";
import audrey from "../img/Audrey.svg";
import facebook from "../img/logos/facebook.svg";
import instagram from "../img/logos/instagram.svg";

import "../styles/stylesComponents/Contact.scss";

export default function Contact() {
  return (
    <div className="contact">
      <div className="citation">
        <img
          src={olive}
          alt="olive"
          className="citation__olive img-fluid"
          width="100%"
        />
        <div className="citation__text">
          “Vous êtes le plus beau projet sur lequel vous pouvez travailler.”
        </div>
      </div>
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
            Que vous dire sur moi ? Je m’appelle Audrey et j’ai 31 ans. Cela
            peut paraitre bien jeune, mais croyez-moi mon âme n’a pas choisi la
            facilité dans cette nouvelle incarnation ! ce sont des années
            marquées par les leçons de vie qui m’ont fait grandir à vitesse
            grand V et m’ont révélées déjà très tôt mon chemin de vie.
            <br /> <br />
            Car oui, mon envie d’aider les autres ne date pas d’hier. Déjà
            enfant, je rêvais de devenir médecin pour soigner « tous les bobos
            du monde ». Seulement voilà, l’Univers a dû sentir que la médecine
            occidentale moderne n’était pas vraiment faite pour moi et que je
            n’étais pas encore prête pour cette voie.
            <br /> <br /> Alors me voilà emportée par le flot de la vie dans des
            études de commerce, qui ont tout de même veillées à ce que je ne
            m’éloigne pas trop de ma voie, avec des postes dans des services
            publics et des structures sociales et de soins. C’est là, au
            contacts des autres, que mon empathie bienveillante, ma capacité
            d’écoute et mon souhait d’apporter mon aide m’ont donné l’envie de
            faire plus. <br /> <br />
            C’est enfin en 2023 que le déclic se fait, je ne suis pas assez
            épanouie, pas assez en accord avec moi-même… et me voilà lancée en
            parallèle sur une formation de praticienne en Reiki Usui et
            d’hypnothérapeute en hypnose Ericksonienne, car pour moi on ne peut
            traiter sans prendre en compte la vue d’ensemble dans une démarche
            holistique. <br /> <br /> C’est ainsi que Metanoia Therapy est née
            et que nous allons ensemble écrire la suite de l’histoire…
          </div>
          <img
            src={audrey}
            alt="audrey"
            className="contact__content--text-Img order-xl-1"
          />
        </div>
        <div className="contact__footer">
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
        </div>
      </div>
    </div>
  );
}
