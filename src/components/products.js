import React from "react";
import { moneyFormat } from "./helpers";

const Product = ({ product, basket, setBasket, total, money }) => {
  const basketItem = basket.find((item) => item.id === product.id);
  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    //ürün daha önce eklenmiş
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket([
        ...basket,
        {
          id: product.id,
          amount: 1,
        },
      ]);
    }
  };

  const removeBasket = () => {
    const currentBasket = basket.find((item) => item.id === product.id);
    const basketWithoutCurrent = basket.filter(
      (item) => item.id !== product.id
    );
    currentBasket.amount -= 1;
    if (currentBasket === 0) {
      setBasket([...basketWithoutCurrent]);
    } else {
      setBasket([...basketWithoutCurrent, currentBasket]);
    }
  };

  return (
    <>
      <div className="product">
        <div className="product-img">
          <img src={product.image} />
        </div>
        <div className="product-text">
          <h6>{product.title}</h6>
          <div className="price">${moneyFormat(product.price)}</div>
          <div className="actions">
            <button
              disabled={!basketItem}
              className="sell-btn"
              onClick={removeBasket}
            >
              Sell
            </button>
            <span className="amount">
              {(basketItem && basketItem.amount) || 0}
            </span>
            <button
              disabled={total + product.price > money}
              onClick={addBasket}
              className="buy-btn"
            >
              Buy
            </button>
          </div>
        </div>

        <style jsx>{`
          .actions button[disabled] {
            opacity: 0.3;
            cursor: not-allowed;
          }
        `}</style>
      </div>
    </>
  );
};

export default Product;
