import React, { useState } from "react";

const Item = ({ name, itemId, price, type, unit = "", onAddItem }) => {
  const [qtyUnitVal, setQtyUnitVal] = useState(0);

  return (
    <div className="item">
      <h5>{name}</h5>
      <p>{`Price ${type === "UNIT" ? "by 1 " + unit : ""}: ${price}`}</p>
      {type === "UNIT" && (
        <input
          data-testid={`${itemId}-input`}
          type="number"
          value={qtyUnitVal}
          name="qtyUnitVal"
          onChange={({ target: { value } }) => setQtyUnitVal(value)}
        />
      )}
      <button
        data-testid={`${itemId}-btn`}
        disabled={type === "UNIT" && qtyUnitVal <= 0}
        onClick={() => {
          onAddItem &&
            onAddItem({ itemId, name, price, type, unit, qtyUnit: qtyUnitVal });
        }}
      >
        add item
      </button>
    </div>
  );
};

export default Item;
