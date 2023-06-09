
import "./App.css";

import { useState, useEffect } from "react";
import Product from "./components/Product";
import products from "./products.json"
import Basket from "./components/Basket";
import Header from "./components/Headerr";

function App() {

  const [money, setMoney] = useState(100000)
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)
  const resetBasket = () => { setBasket([]) }
  useEffect(() => {

    setTotal(basket.reduce((acc, item) => {
      return acc + (item.amount * (products.find(product => product.id === item.id).price))
    }, 0))
    console.log(basket)
  }, [basket])



  return (

    <div><Header money={money} total={total} />
      <div className="container products">{products.map(product => (
        <Product key={product.id} money={money} total={total} product={product} basket={basket} setBasket={setBasket} />
      ))}</div>

      {total > 0 && (<Basket resetBasket={resetBasket} products={products} basket={basket} total={total} />)}


    </div>



  );


}

export default App;
