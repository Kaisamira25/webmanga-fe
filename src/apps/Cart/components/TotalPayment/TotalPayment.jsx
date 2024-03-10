import React, { useState } from "react";
import TextInfo from "../../../../components/TextInfo/TextInfo";
import ButtonInput from "../../../../components/BtnInput";
import style from "./TotalPayment.module.scss";
import { Link } from "react-router-dom";

export default function GoCartpayment({ textInfo, className }) {
  const [discountCode, setDiscountCode] = useState(""); 
  const [isDiscountValid, setIsDiscountValid] = useState(false); 
  const [isInputFilled, setIsInputFilled] = useState(false); 
  const handleDiscountCodeChange = (event) => {
    const inputDiscountCode = event.target.value;
    setDiscountCode(inputDiscountCode); 
    setIsInputFilled(!!inputDiscountCode.trim()); 
  };

  const handleOpenFinishModal = () => {
    
    if (!isInputFilled) {
      console.log("Bạn chưa nhập mã giảm giá!");
      return; 
    }


    if (discountCode === "DISCOUNT20") {
      console.log("Mã giảm giá đã được áp dụng!");
      setIsDiscountValid(true); 
     
    } else {
      console.log("Mã giảm giá không hợp lệ!");
      setIsDiscountValid(false); 
    }
  };

  return (
    <div className={style.container}>
      <div className={style.text}>
        {textInfo.map((text, index) => (
          <TextInfo
            className={className}
            index={index}
            title={text.title}
            text={text.text}
          />
        ))}
      </div>
      <div>
        <input
          type="text"
          value={discountCode}
          onChange={handleDiscountCodeChange}
          placeholder="Nhập mã giảm giá"
          className={style.input}
        />
        {!isDiscountValid && isInputFilled && (
          <p className={style.invalidMessage}>Mã giảm giá không hợp lệ!</p>
        )}

      </div>

      <div className={style.btn}>
        <Link to={"/Cart/Payment"}> 
        <ButtonInput
          placeholder={"Continue"}
          onClick={handleOpenFinishModal}
        />
        </Link>
      
      </div>

    </div>
  );
}
