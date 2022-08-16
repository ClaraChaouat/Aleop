import "./footer.scss";

export function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerHorizontalBar"></div>
      <div className="footerPaymentConditions">
        <p>*Délais de paiement à 30 jours</p>
      </div>
      <div className="footerDiscountTerms">
        <p>
          **Remise possible de 1% de la valeur
          totale de la commande si votre commande est payée dans les 10 jours
          ouvrables suivant la commande. La remise sera accordée
          trimestriellement sous forme de crédit dans la boutique en ligne B2B
          (À partir du 15 du mois qui suit le trimestre)
        </p>
      </div>
    </div>
  );
}
