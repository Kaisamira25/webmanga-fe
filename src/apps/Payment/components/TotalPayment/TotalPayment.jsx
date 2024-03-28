import React from "react";
import TextInfo from "../../../../components/TextInfo/TextInfo";
import ButtonInput from "../../../../components/BtnInput";
import style from "./TotalPayment.module.scss";
import FinishPayment from "../../../../components/Models/FinishPayment/FinishPayment";
import { useState } from "react";

export default function TotalPayment({
  textInfo,
  className,
  isPaymentInfoComplete,
}) {
  const [showFinishModal, setShowFinishModal] = useState(false);

  const handleOpenFinishModal = () => {
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
