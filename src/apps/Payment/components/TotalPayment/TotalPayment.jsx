import React from "react";
import TextInfo from "../../../../components/TextInfo/TextInfo";
import ButtonInput from "../../../../components/BtnInput";
import style from "./TotalPayment.module.scss";
import FinishPayment from "../../../../components/Models/FinishPayment/FinishPayment";
import { useState } from "react";

export default function TotalPayment({ textInfo }) {
  const [showFinishModal, setShowFinishModal] = useState(false);

  const handleOpenFinishModal = () => {
    setShowFinishModal(true);
  };
  return (
    <div className={style.container}>
      <div>
        {textInfo.map((text, index) => (
          <TextInfo index={index} title={text.title} text={text.text} />
        ))}
      </div>
      <div className={style.btn}>
        <ButtonInput
          placeholder={"Thanh toán"}
          onClick={handleOpenFinishModal}
        />
      </div>
      {showFinishModal && (
        <FinishPayment onClose={() => setShowFinishModal(false)} />
      )}
    </div>
  );
}
