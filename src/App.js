import { useEffect, useState } from "react";
import "./App.css";
import Basket from "./components/basket";
import Header from "./components/header";
import Product from "./components/products";
import products from "./products.json";

function App() {
  const [money, setMoney] = useState(1000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  const resetBasket = () => {
    setBasket([]);
  };

  useEffect(() => {
    console.log(basket);
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);

  return (
    <>
      <Header money={money} total={total} />

      <div className="container products">
        {products.map((product) => (
          <Product
            key={product.id}
            basket={basket}
            setBasket={setBasket}
            product={product}
            total={total}
            money={money}
          />
        ))}
      </div>

      {total > 0 && (
        <Basket
          resetBasket={resetBasket}
          products={products}
          total={total}
          basket={basket}
        />
      )}
    </>
  );
}

export default App;
