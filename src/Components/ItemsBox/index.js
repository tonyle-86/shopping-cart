import React from "react";
import Item from "./item";

const ITEMS = [
  {
    itemId: 1,
    name: "Face Mask",
    price: 2.5,
    type: "QTY",
  },
  {
    itemId: 2,
    name: "Toilet Paper",
    price: 0.65,
    type: "QTY",
  },
  {
    itemId: 3,
    name: "Hand Sanitizer",
    price: 19.99,
    type: "UNIT",
    unit: "lt",
    // qtyUnit: 1
  },
];
const ItemList = ({ onAddItem }) => {
  return (
    <div className="item-list">
      <h4>Items</h4>

      {ITEMS.map((obj, i) => (
        <Item key={i} {...obj} onAddItem={onAddItem} />
      ))}
    </div>
  );
};

export default ItemList;
