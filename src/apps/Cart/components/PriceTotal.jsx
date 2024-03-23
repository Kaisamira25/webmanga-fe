import React, { useEffect, useState } from "react";
import ProductField from "../../../components/ProductField/ProductFieldTailwind";
import style from "./PriceTotal.module.scss";
import GoCartPayment from "./TotalPayment/TotalPayment";
import { Link } from "react-router-dom";
import { fetchCart } from "../../../services/Service";
function PriceTotal({ cartUpdated }) {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetchCartData();
  }, [cartUpdated]);

  const fetchCartData = async () => {
    try {
      const res = await fetchCart();
      if (res.data) {
        setCart(res.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    const totalPrice = cart.reduce(
      (acc, product) => acc + product.qty * product.price,
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
        {cart.map((product, index) => (
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
