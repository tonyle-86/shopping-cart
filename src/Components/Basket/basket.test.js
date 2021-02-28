import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import BasketList from "./index";

const items = [
  {
    id: 11,
    itemId: 1,
    name: "Face Mask",
    price: 2.5,
    type: "QTY",
    unit: "",
    qtyUnit: 0,
  },
  {
    id: 22,
    itemId: 1,
    name: "Face Mask",
    price: 2.5,
    type: "QTY",
    unit: "",
    qtyUnit: 0,
  },
];
afterEach(cleanup);

it("Render the Basket with 2 added items", () => {
  const { getAllByText } = render(<BasketList basketItems={items} />);

  expect(getAllByText(/Face Mask/i).length).toEqual(2);
});