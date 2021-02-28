import React from "react";

const BasketList = ({ basketItems, onRemoveItem }) => {
  const price = (obj) => {
    return obj.type === "UNIT"
      ? (Math.round(parseFloat(obj.qtyUnit) * obj.price * 100) / 100).toFixed(2)
      : 1 * obj.price;
  };
  return (
    <div className="basket-list">
      <h5>Basket </h5>
      {basketItems.map((obj, i) => (
        <div key={i} className="item">
          <span>
            <strong>{obj.name}</strong>
          </span>
          {obj.type === "UNIT" && (
            <p>
              {obj.qtyUnit} {obj.unit}
            </p>
          )}
          <p>Price: {price(obj)}</p>
          <button
            className="d-btn"
            onClick={() => onRemoveItem && onRemoveItem(obj.id)}
          >
            remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default BasketList;
