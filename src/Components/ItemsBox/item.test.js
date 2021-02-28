import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Item from "./item.js";

afterEach(cleanup);

it("Render the Item with type QTY", () => {
  const { getByText } = render(
    <Item name="paper" itemId="1231" price={123} type="QTY" unit="" />
  );

  expect(getByText(/paper/i).textContent).toBe("paper");

  expect(getByText(/Price :/i).textContent).toBe("Price : 123");
});

it("Render the Item with type UNIT", () => {
  const { getByText } = render(
    <Item name="hand-sanitiser" itemId="33" price={12} type="UNIT" unit="lt" />
  );

  expect(getByText(/hand-sanitiser/i).textContent).toBe("hand-sanitiser");

  expect(getByText(/Price /i).textContent).toBe("Price by 1 lt: 12");
});