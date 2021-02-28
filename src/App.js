import React, { useEffect, useState } from "react";
import ItemsBox from "./Components/ItemsBox";
import BasketBox from "./Components/Basket";
import ReceiptBox from "./Components/Receipt";

const DISCOUNTS = [
  {
    forItem: 1,
    title: "Face Masks 2 for £4",
    amount: 1,
  },
  {
    forItem: 2,
    title: "Tiolet Paper 6 for 5",
    amount: 0.65,
  },
];

function App() {
  const [basketList, setBasketItem] = useState([]);

  const [receipt, setReceipt] = useState(null);

  useEffect(() => {
    // CALCULATE THE PRICE WHENEVER ITEM IS ADDED OR REMOVED FROM BASKET
    onCalculate();
    // eslint-disable-next-line
  }, [basketList]);

  // ADD ITEM TO BASKET
  const onAddItem = (item) => {
    const id = parseInt(Math.random() * 99999);
    setBasketItem((p) => [...p, { id, ...item }]);
  };
  // REMOVE ITEM FROM BASKET
  const onRemoveItem = (itemId) => {
    setBasketItem((p) => p.filter(({ id }) => itemId !== id));
  };

  // CALCULATE THE BASKET ITEMS AND SAVE RESULTS TO RECEIPT STATE.
  const onCalculate = () => {
    const countGroupByItems = {};
    basketList.forEach((elem) => {
      if (!!countGroupByItems[elem.itemId]) {
        countGroupByItems[elem.itemId].count += 1;
      } else {
        countGroupByItems[elem.itemId] = {
          count: 1,
        };
      }
    });
    const discountList = [];
    DISCOUNTS.forEach((disElem) => {
      if (countGroupByItems[disElem["forItem"]]) {
        const obj = countGroupByItems[disElem["forItem"]];
        if (disElem["forItem"] === 1 && obj.count >= 2) {
          const countedDiscount = parseInt(obj.count / 2);
          discountList.push({
            title: disElem["title"],
            amount: countedDiscount * disElem["amount"],
          });
        }
        if (disElem["forItem"] === 2 && obj.count >= 6) {
          const countedDiscount = parseInt(obj.count / 6);
          discountList.push({
            title: disElem["title"],
            amount: countedDiscount * disElem["amount"],
          });
        }
      }
    });

    const calcSubTotal = basketList
      .map((item) => {
        if (item?.type === "QTY") {
          return item?.price;
        } else {
          return item?.price * item?.qtyUnit;
        }
      })
      .reduce((a, b) => a + b, 0);

    const calcTotalSaving = discountList
      .map((dis) => {
        return dis?.amount || 0;
      })
      .reduce((a, b) => a + b, 0);

    const calcTotalPay = calcSubTotal - calcTotalSaving;
    setReceipt({
      items: basketList,
      discountList,
      subTotal: Math.round(calcSubTotal * 100) / 100,
      totalSaving: Math.round(calcTotalSaving * 100) / 100,
      totalPay: Math.round(calcTotalPay * 100) / 100,
    });
  };
  return (
    <div className="App">
      <h1 className="App-header">Cart App</h1>

      <div className="row">

        <ItemsBox onAddItem={onAddItem} />

        <BasketBox basketItems={basketList} onRemoveItem={onRemoveItem} />

        {receipt && <ReceiptBox {...receipt} />}
      </div>
    </div>
  );
}

export default App;
