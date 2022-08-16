import "./productscaroussel.scss";
import { Products } from "./Products";
import proteinPowder from "../images/protein-powder.png";
import proteinBar from "../images/protein-bar.png";
import snacks from "../images/snacks.png";
import supplements from "../images/supplements.png";
import aminoAcid from "../images/amino-acid.png";
import readyToDrink from "../images/ready-to-drink.png";
import cookingProducts from "../images/cooking-products.png";
import spread from "../images/spread.png";
import muesliPorridge from "../images/muesli-porridge.png";
import sliderArrowWhite from "../images/slider-icon-arrow-left-white.svg";

export function ProductsCaroussel() {
  return (
    <div className="productsCaroussel">
      <div className="productsCarousselTitle">
        <p>Les produits foodspring</p>
      </div>
      <div className="ProductCarousselContainer">
        <Products description="Protéines en poudre" img={proteinPowder} />
        <Products description="Barres" img={proteinBar} />
        <Products description="En-cas" img={snacks} />
        <Products description="Suppléments" img={supplements} />
        <Products description="Acides aminés" img={aminoAcid} />
        <Products description="Prêts-à-boire" img={readyToDrink} />
        <Products description="Cuisine fitness" img={cookingProducts} />
        <Products description="Pâtes à tartiner" img={spread} style />
        <Products description="Muesli & Porridge" img={muesliPorridge} style />
      </div>

      <button className="productsCarousselBtn">
        <img src={sliderArrowWhite} alt="Arrow to scroll caroussel"></img>
      </button>
    </div>
  );
}
