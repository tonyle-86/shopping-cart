import React from "react";
import { render, fireEvent, cleanup, screen } from "@testing-library/react";
import App from "./App";

test("ADD items into the basket and check the total and sub-total and saving", () => {
  const { getByTestId } = render(<App />);

  fireEvent.click(getByTestId("1-btn"));
  fireEvent.click(getByTestId("1-btn"));

  [...Array(13).fill(0)].forEach(() => {
    fireEvent.click(getByTestId("2-btn"));
  });

  fireEvent.change(getByTestId("3-input"), { target: { value: 0.175 } });

  fireEvent.click(getByTestId("3-btn"));

  expect(getByTestId("sub-total").textContent).toBe("£16.95");
  expect(getByTestId("total-saving").textContent).toBe("£2.3");
  expect(getByTestId("total-pay").textContent).toBe("£14.65");
});
