import React from "react";

const Receipt = ({ items, discountList, subTotal, totalSaving, totalPay }) => {
  const price = (obj) => {
    return obj.type === "UNIT"
      ? (Math.round(parseFloat(obj.qtyUnit) * obj.price * 100) / 100).toFixed(2)
      : 1 * obj.price;
  };

  return (
    <div className="receipt">
      {items.map((o, i) => (
        <div key={i} className="row-space-b">
          <span>{`${o?.name}`}</span>
          <span>{`£${price(o)}`}</span>
        </div>
      ))}
      <p>--------</p>
      <div className="row-space-b">
        <span>Sub-total</span>
        <span data-testid="sub-total">{`£${subTotal}`}</span>
      </div>
      <p>--------</p>
      <p>Savings</p>
      {discountList.map((o, i) => (
        <div key={i} className="row-space-b">
          <span>{`${o?.title}`}</span>
          <span>-£{`${o?.amount.toFixed(2)}`}</span>
        </div>
      ))}

      <p>--------</p>
      <div className="row-space-b">
        <span>Total Savings:</span>
        <span data-testid="total-saving">{`£${totalSaving}`}</span>
      </div>
      <p>--------</p>
      <div className="row-space-b">
        <span>Total to Pay:</span>
        <span data-testid="total-pay">{`£${totalPay}`}</span>
      </div>
    </div>
  );
};

export default Receipt;
