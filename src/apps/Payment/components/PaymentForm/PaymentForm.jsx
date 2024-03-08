import React, { useEffect, useState } from "react";
import Title from "../../../../components/Title/Title";
import SelectField from "../../../../components/SelectField/SelectField";
import style from "./PaymentForm.module.scss";
import InputValidate from "../InputValidate/InputValidate";
import BankValidate from "../InputValidate/BankValidate";

export default function PaymentForm() {
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    "Cash payment",
    "Bank card payment",
    "QR code payment",
    "Visa payment",
  ];

  const handleSelectChange = (selectedValue) => {
    setSelectedOption(selectedValue);
  };

  return (
    <div className={style.container}>
      <div className={style.title}>
        <Title title={"Payments"} />
      </div>
      <div className={style.wrapper}>
        <p className={style.title}>Payment information</p>
        <div className={style.inputField}>
          <div
            className={`${
              selectedOption === "Bank card payment" ||
              selectedOption === "Visa payment"
                ? style.left
                : style.full
            } `}
          >
            <InputValidate className={style.mapField} />

            <SelectField
              label={"Payment methods"}
              placeholder={"Please select a payment method"}
              options={options}
              value={selectedOption}
              onChange={handleSelectChange}
            />
          </div>
          {(selectedOption === "Bank card payment" ||
            selectedOption === "Visa payment") && (
            <div className={style.right}>
              <BankValidate className={style.mapField} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
