import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import ReceiptBox from "./index";

const testingReceiptProps = {
  items: [
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
  ],
  discountList: [
    {
      title: "Face Masks 2 for £4",
      amount: 1,
    },
  ],
  subTotal: 5,
  totalSaving: 1,
  totalPay: 4,
};

afterEach(cleanup);

it("Render Receipt with sub-total £5 and total £4", () => {
  const { getByTestId } = render(<ReceiptBox {...testingReceiptProps} />);

  expect(getByTestId("sub-total").textContent).toBe("£5");
  expect(getByTestId("total-saving").textContent).toBe("£1");
  expect(getByTestId("total-pay").textContent).toBe("£4");
});
