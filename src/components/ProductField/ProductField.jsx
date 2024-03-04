import React from "react";
import style from "./ProductField.module.scss";

export default function ProductField({ src, alt, name, price }) {
  return (
    <div className={style.container}>
      <div className={style.imgField}>
        <img src={src} alt={alt} className={style.img} />
      </div>
      <div className={style.textField}>
        <div className={style.productName}>{name}</div>
        <div className={style.productPrice}>{price} VNĐ</div>
      </div>
    </div>
  );
}