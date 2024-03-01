import React from "react";
import style from "./Payment.module.scss";
import PaymentForm from "./components/PaymentForm/PaymentForm";
import DetailProduct from "./components/DetailProduct/DetailProduct";

function Payment() {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.left}>
          <PaymentForm />
        </div>
        <div className={style.right}>
          <DetailProduct />
        </div>
      </div>
    </div>
  );
}

export default Payment;
