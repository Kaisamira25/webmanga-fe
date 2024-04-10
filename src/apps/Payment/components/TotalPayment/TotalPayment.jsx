import React, { useEffect } from "react";
import TextInfo from "../../../../components/TextInfo/TextInfo";
import ButtonInput from "../../../../components/BtnInput";
import style from "./TotalPayment.module.scss";
import FinishPayment from "../../../../components/Models/FinishPayment/FinishPayment";
import { useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

export default function TotalPayment({
  textInfo,
  className,
  isPaymentInfoComplete,
}) {
  const [showFinishModal, setShowFinishModal] = useState(false);
  const [order,setOrder]=useState();

  const handleOpenFinishModal = async () => {
    const userData = JSON.parse(localStorage.getItem('UserData'));
    const cartData = JSON.parse(localStorage.getItem('cart'));
    const id = jwtDecode(sessionStorage.getItem('accessToken')).customerId;
    const payData=localStorage.getItem('Payment')
    const order = {
      totalPrice:localStorage.getItem('total'),
      phoneNumber:userData.phone,
      address:userData.address,
      paymentStatus:false,
      discount: localStorage.getItem('discount'),
      email:userData.email,
      orderItem:JSON.parse(localStorage.getItem('cart'))
    };
    setOrder(order);
    console.log(order)
    await axios.post('http://localhost:8080/api/v1/order',order);
    localStorage.removeItem('Payment')
    localStorage.removeItem('total')
    localStorage.removeItem('discount')
    localStorage.setItem('cart','')
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
