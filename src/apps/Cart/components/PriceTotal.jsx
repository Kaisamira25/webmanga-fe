import React from "react";
import ProductField from "../../../components/ProductField/ProductFieldTailwind";
import style from "./PriceTotal.module.scss";
import Inputall from "../../../components/InputAll";
import GoCartpayment from "./TotalPayment/TotalPayment";
import { Link } from "react-router-dom";
function PriceTotal() {
  
  const productField = [
    {
      name: "The Eminence In Shadow",
      quantity: "x1",
      price: "50.000",
    },

  ];

  const textInfo = [
    { title: "Subtotal", text: "50.000 VND" },
    { title: " Shipping ", text: "10.000 VND" },

    { title: "Discount  ", text: "-20.000 VND" },

    { title: "Total bill", text: "40.000 VNĐ" },
  ];

  return (
    <div>
      <div className=" product  border-b-2 border-black ">
        {productField.map((product, index) => (
          <ProductField
            key={index}
            name={product.name}
            quantity={product.quatily}
            price={product.price}
          />
        ))}
      </div >
      <div>
        <GoCartpayment className={style.total} textInfo={textInfo} />
      </div>
    </div>
  );
}

export default PriceTotal;
