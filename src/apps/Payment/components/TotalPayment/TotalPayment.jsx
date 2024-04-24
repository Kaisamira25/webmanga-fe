import React, { useEffect } from "react";
import TextInfo from "../../../../components/TextInfo/TextInfo";
import ButtonInput from "../../../../components/BtnInput";
import style from "./TotalPayment.module.scss";
import FinishPayment from "../../../../components/Models/FinishPayment/FinishPayment";
import { useState } from "react";
import axios from "axios";

export default function TotalPayment({
  textInfo,
  className,
  isPaymentInfoComplete,
}) {
  const [showFinishModal, setShowFinishModal] = useState(false);
  const [order, setOrder] = useState();
  const clearLocal = () => {
    sessionStorage.removeItem("Payment");
    sessionStorage.removeItem("total");
    sessionStorage.removeItem("discount");
    sessionStorage.removeItem("cart");
  };
  const handleOpenFinishModal = async () => {
    const userData = JSON.parse(sessionStorage.getItem("UserData"));
    const id = sessionStorage.getItem("accessToken");

    const order = {
      totalPrice: sessionStorage.getItem("total"),
      fullname: userData.fullname,
      phoneNumber: userData.phone,
      address: userData.address,
      paymentStatus: false,
      discount:
        sessionStorage.getItem("discount") === null
          ? null
          : sessionStorage.getItem("discount"),
      email: userData.email,
      orderItem: JSON.parse(sessionStorage.getItem("cart")),
      status: id === null ? false : true,
    };
    setOrder(order);
    await axios.post("http://localhost:8080/api/v1/order", order);
    clearLocal();
    setShowFinishModal(true);
  };

  return (
    <div className={style.container}>
      <div className={style.text}>
        {textInfo.map((item, index) => (
          <TextInfo
            className={className}
            index={index}
            title={item.title}
            price={item.price ? item.price : null}
            text={item.text ? item.text : null}
          />
        ))}
      </div>
      <div className={style.btnField}>
        <ButtonInput
          placeholder={"Pay"}
          onClick={handleOpenFinishModal}
          className={`${isPaymentInfoComplete ? style.btn : style.btnHidden}`}
        />
      </div>
      {showFinishModal && (
        <FinishPayment onClose={() => setShowFinishModal(false)} />
      )}
    </div>
  );
}
