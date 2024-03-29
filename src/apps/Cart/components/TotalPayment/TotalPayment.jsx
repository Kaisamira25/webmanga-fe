import React, { useState } from "react";
import TextInfo from "../../../../components/TextInfo/TextInfo";
import ButtonInput from "../../../../components/BtnInput";
import style from "./TotalPayment.module.scss";
import { useNavigate } from "react-router-dom";

export default function TotalPayment({
  textInfo,
  className,
  onDiscountCodeChange,
}) {
  const navigate = useNavigate();
  const [discountCode, setDiscountCode] = useState("");
  const [isDiscountValid, setIsDiscountValid] = useState(true);

  const handleDiscountCodeChange = (event) => {
    const inputDiscountCode = event.target.value;
    setDiscountCode(inputDiscountCode);
    if (inputDiscountCode.trim() !== "" && inputDiscountCode === "DISCOUNT20") {
      setIsDiscountValid(true);
      onDiscountCodeChange(inputDiscountCode);
    } else if (
      inputDiscountCode.trim() !== "" &&
      inputDiscountCode !== "DISCOUNT20"
    ) {
      setIsDiscountValid(false);
    } else {
      setIsDiscountValid(true);
      onDiscountCodeChange(inputDiscountCode);
    }
  };

  const handleToPayment = () => {
    navigate("/cart/payment");
  };

  return (
    <div className={style.container}>
      <div className={style.text}>
        {textInfo.map((text, index) => (
          <TextInfo
            className={className}
            index={index}
            title={text.title}
            price={text.price}
          />
        ))}
      </div>
      <div>
        <input
          type="text"
          value={discountCode}
          onChange={handleDiscountCodeChange}
          placeholder="Enter the discount code"
          className={style.input}
        />
        {!isDiscountValid && (
          <p className={style.invalidMessage}>Invalid discount code!</p>
        )}
      </div>
      <div className={style.btn}>
        <ButtonInput placeholder={"Continue"} onClick={handleToPayment} />
      </div>
    </div>
  );
}
