import "./carousseldeals.scss";

export function CarousselDeals(props) {
  return (
    <div className="carousselDealsContainer">
      <div className={`carousselDealsOffers ${props.text ? "text" : ""} ${props.extraPaddings ? "extraPaddings" : ""}`}>
        <p>{props.offer}</p>
      </div>
      <div className={`carousselDealsConditions ${props.extraPaddings ? "extraPaddings" : ""}`}>
        <p>{props.conditions}</p>
      </div>
    </div>
  );
}
