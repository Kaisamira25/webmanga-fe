import React, { useEffect, useState } from "react";
import ProductField from "../../../components/ProductField/ProductFieldTailwind";
import style from "./PriceTotal.module.scss";
import GoCartPayment from "./TotalPayment/TotalPayment";
import { Link } from "react-router-dom";
import {useLocation} from 'react-router-dom';

import { fetchCart } from "../../../services/Service";
function PriceTotal({ cartUpdated }) {
  const location = useLocation();
  const { state } = location;
  const Nlistproduct = {
    'name': state.listproduct[0].name,
    'img': state.listproduct[0].img,
    'price': state.listproduct[0].price,
    'author': state.listproduct[0].author,
    'qty': state.quantity,
  }
  console.log(Nlistproduct);
  const listcart = [];
  listcart.push(Nlistproduct);
  // const [cart, setCart] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(0);

  // useEffect(() => {
  //   fetchCartData();
  // }, [cartUpdated]);

  // const fetchCartData = async () => {
  //   try {
  //     const res = await fetchCart();
  //     if (res.data) {
  //       setCart(res.data);
  //     }
  //     console.log(res.data);
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //   }
  // };

  useEffect(() => {
    const totalPrice = cart.reduce(
      (acc, product) => acc + state.quantity* state.listproduct[0].price,
      0
    );
    setTotalPrice(totalPrice);
  }, [cart]);
  const textInfo = [
    { title: "Cart blackmail ", price: totalPrice },
    { title: " Shipping Fee", price: 50000 },

    { title: "Discount code ", price: 50000 },

    { title: "Total bill", price: 50000 },
  ];
  return (
    <div>
      <div className=" product  border-b-2 border-black ">
        {listcart.map((product, index) => (
          <ProductField
            key={index}
            name={product.name}
            quantity={product.qty}
            price={product.price}
          />
        ))}
      </div>

      <div>
        <GoCartPayment className={style.total} textInfo={textInfo} />
      </div>
    </div>
  );
}
export default PriceTotal;
