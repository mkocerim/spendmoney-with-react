import React from "react";
import BasketItem from "./basketItem";

const Basket = ({ basket, products, total, resetBasket }) => {
  return (
    <div className="basket-container container">
      <ul>
        {basket.map((item) => (
          <BasketItem
            key={item.id}
            item={item}
            product={products.find((p) => p.id === item.id)}
          />
        ))}
      </ul>
      <div className="total">Toplam : ${total}</div>
      <hr />
      <button onClick={resetBasket}>Reset</button>
    </div>
  );
};

export default Basket;
