import { CarousselDeals } from "./CarousselDeals";
import { useRef } from "react";
import returnIcon from "../images/icon-return-left.svg";
import "./caroussel.scss";

export function Caroussel() {
  const refContainer = useRef();
  function handleOnClick() {
    
    refContainer.current.scroll({
      left: refContainer.current.scrollLeft + 300,
      behavior: "smooth",
    });
  }

  return (
    <div className="caroussel">
      <div className="carousselContainer" ref={refContainer}>
        <CarousselDeals
          offer="5%"
          conditions="Pour toute commande supérieure à 500 €"
        />
        <CarousselDeals
          offer="10%"
          conditions="Pour toute commande supérieure à 1000 €"
        />
        <CarousselDeals
          offer="5 shakers & 5 cuillères doseuses"
          conditions="Offerts pour toute commande supérieure à 500 €"
          text
        />
        <CarousselDeals
          offer="Livraison offerte"
          conditions="A partir de 200 € de commande"
          text
          extraPaddings
        />
      </div>
      <button className="carousselBtn" onClick={handleOnClick}>
        <img src={returnIcon} alt="Arrow to scroll caroussel"></img>
      </button>
    </div>
  );
}
