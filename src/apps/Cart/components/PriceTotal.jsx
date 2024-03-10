import React from "react";
import ProductField from "../../../components/ProductField/ProductFieldTailwind";
import style from "./PriceTotal.module.scss";
import Inputall from "../../../components/InputAll";
import GoCartpayment from "./TotalPayment/TotalPayment";
function PriceTotal() {
  const productField = [
    {
      name: "The Eminence In Shadow",
      quantity: "x1",
      price: "100.000",
    },
    {
      name: "86 eighty six",
      quantity: "x2",
      price: "80.000",
    },
  ];

  const textInfo = [
    { title: "Cart blackmail ", text: "180000 VND" },
    { title: " Shipping Fee", text: "10000 VND" },

    { title: "Discount code ", text: "-20000 VND" },

    { title: "Total bill", text: "170000 VNĐ" },
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
