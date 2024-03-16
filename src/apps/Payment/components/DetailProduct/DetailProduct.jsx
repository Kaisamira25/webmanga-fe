import React, { useEffect, useState } from "react";
import Title from "../../../../components/Title/Title";
import style from "./DetailProduct.module.scss";
import ProductField from "../../../../components/ProductField/ProductField";
import imgSrc from "../../../../assets/imgs/imgTest.svg";
import TotalPayment from "../TotalPayment/TotalPayment";
import { fetchCart } from "../../../../services/Service";

function DetailProduct() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    fetchCartData();
  }, []);
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
    { title: "Invoice ID", text: "123456789" },
    { title: "Total payment", price: totalPrice },
  ];

  return (
    <div className={style.container}>
      <div className={style.title}>
        <Title title={"Product"} />
      </div>
      <div className={style.productField}>
        {cart.map((product, index) => (
          <ProductField
            key={index}
            src={product.img}
            alt={""}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
      <div>
        <TotalPayment className={style.TotalPayment} textInfo={textInfo} />
      </div>
    </div>
  );
}

export default DetailProduct;
