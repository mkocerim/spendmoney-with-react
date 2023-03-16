import React from "react";

const BasketItem = ({ item, product }) => {
  return (
    <li>
      {product.title} <span>x {item.amount}</span>
    </li>
  );
};

export default BasketItem;
