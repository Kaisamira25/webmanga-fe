import React from "react";
import Title from "../../../../components/Title/Title";
import style from "./DetailProduct.module.scss";
import ProductField from "../../../../components/ProductField/ProductField";
import imgSrc from "../../../../assets/imgs/imgTest.svg";
import TotalPayment from "../TotalPayment/TotalPayment";

function DetailProduct() {
  const productField = [
    {
      src: imgSrc,
      alt: "test",
      name: "Whispering you a love song",
      price: "30000",
    },
    {
      src: imgSrc,
      alt: "test",
      name: "Whispering you a love song",
      price: "30000",
    },
    {
      src: imgSrc,
      alt: "test",
      name: "Whispering you a love song",
      price: "30000",
    },
  ];

  const textInfo = [
    { title: "Invoice ID", text: "123456789" },
    { title: "Total payment", text: "90.000 VNĐ" },
  ];

  return (
    <div className={style.container}>
      <div className={style.title}>
        <Title title={"Product"} />
      </div>
      <div>
        {productField.map((product, index) => (
          <ProductField
            key={index}
            src={product.src}
            alt={product.alt}
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
