import "./products.scss";

export function Products(props) {
  return (
    <div className="productsContainer">
      <div className="productsImageContainer">
        <img className="productsImages" src={props.img} alt="Foodspring product advertising "></img>
      </div>
      <div
        className={`productsDescription ${props.style ? "extraPadding" : ""}`}
      >
        <p>{props.description}</p>
      </div>
    </div>
  );
}
