import React from "react";
import TextInfo from "../../../components/TextInfo/TextInfo";
import ButtonInput from "../../../components/BtnInput";
export default function TotalPayment({ textInfo }) {
  return (
    <div >
      <div>
        {textInfo.map((text, index) => (
          <TextInfo index={index} title={text.title} text={text.text} />
        ))}
      </div>
      <div >
        <ButtonInput placeholder={"Thanh toán"} />
      </div>
    </div>
  );
}
