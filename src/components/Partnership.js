import "./partnership.scss";
import foodspringPorridge from "../images/foodspring-porridge-muesly.png";
import partnerShipLogo from "../images/partnership-logo.png";

export function Partnership() {
  return (
    <div className="partnershipContainer">
      <div className="partnershipImageContainer">
        <img
          className="partnershipBackground"
          src={foodspringPorridge}
          alt="Background showing foodspring produits"
        ></img>
      </div>
      <div className="partnershipDescription">
        <div className="partnershipLogo">
          <img
            src={partnerShipLogo}
            alt="Aleop-Foodspring partnership logo"
          ></img>
        </div>
        <div className="partnershipDescriptionContainer">
          <p className="partnershipDescriptionTitle">
            Un partenariat qui fait sens
          </p>
          <p className="partnershipDescriptionText">
            Chez foodspring, nous sommes des nutritionnistes, des spécialistes
            de l'entrainement sportif et des athlètes passionnés. Notre objectif
            commun : développer les aliments les plus naturels et les plus
            innovants de notre temps.
          </p>
        </div>
      </div>
    </div>
  );
}
