import React from "react";
import TextInfo from "../../../../components/TextInfo/TextInfo";
import ButtonInput from "../../../../components/BtnInput";
import style from "./TotalPayment.module.scss";

export default function TotalPayment({ textInfo }) {
  return (
    <div className={style.container}>
      <div className={style.text}>
        {textInfo.map((text, index) => (
          <TextInfo index={index} title={text.title} text={text.text} />
        ))}
      </div>
      <div className={style.btn}>
        <ButtonInput placeholder={"Thanh toán"} />
      </div>
    </div>
  );
}
