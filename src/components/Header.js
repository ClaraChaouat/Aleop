import "./header.scss";
import returnArrow from "../images/icon-return.svg";
import background from "../images/header-background.png";
import foodSpringLogo from "../images/foodspring-logo.png";

export function Header() {
  return (
    <div className="headerContainer">
      <div className="headerContainerBackgroundImage">
        <img
          className="headerImageBackground"
          src={background}
          alt="Model drinking foodspring beverage"
        ></img>
      </div>
      <div className="headerNavBar">
        <a href="!#">
          <img src={returnArrow} alt="Return to previous page"></img>
          <p>Retour</p>
        </a>
      </div>
      <div className="headerText">
        <div className="headerTitle">
          <img src={foodSpringLogo} alt="Foodspring logo"></img>
        </div>
        <div className="headerSubtitle">A propos de la marque</div>
        <div className="headerDescription">
          <p>
            Chez foodspring, nous sommes des nutritionnistes, des spécialistes
            de l'entrainement sportif et des athlètes passionnés. Notre objectif
            commun : développer les aliments les plus naturels et les plus
            innovants de notre temps. Que ce soit pour la nutrition sportive,
            les aliments fonctionnels ou les superaliments, nous portons les
            aliments à un degré de qualité qui reste inégalé. Nous ne laissons
            pas la place aux compromis. Ni dans la qualité, ni dans la
            fabrication. C'est la raison pour laquelle chacun de nos produits
            est une promesse de qualité unique.
          </p>
        </div>
      </div>
    </div>
  );
}
