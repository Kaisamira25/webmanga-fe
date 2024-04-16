import React, { useEffect, useState } from "react";
import Title from "../../../../components/Title/Title";
import SelectField from "../../../../components/SelectField/SelectField";
import style from "./PaymentForm.module.scss";
import InputValidate from "../InputValidate/InputValidate";
import BankValidate from "../InputValidate/BankValidate";

export default function PaymentForm({ onPaymentInfoChange }) {
  const [selectedOption, setSelectedOption] = useState("Cash payment");
  const [, setInputValid] = useState(false);
  const [, setBankValid] = useState(false);

  const options = [
    "Cash payment",
    "Bank card payment",
    "QR code payment",
    "Visa payment",
  ];

  const handleSelectChange = (selectedValue) => {
    setSelectedOption(selectedValue);
  };
  useEffect(() => {
    localStorage.setItem("Payment", selectedOption);
  }, [selectedOption]);
  const handleInputValidationChange = (isValid) => {
    setInputValid(isValid);
    if (
      selectedOption !== "Bank card payment" &&
      selectedOption !== "Visa payment"
    ) {
      onPaymentInfoChange(isValid);
    }
  };

  const handleBankValidationChange = (isValid) => {
    setBankValid(isValid);
    if (
      selectedOption === "Bank card payment" ||
      selectedOption === "Visa payment"
    ) {
      onPaymentInfoChange(isValid);
    }
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
            <InputValidate
              className={style.mapField}
              onValidationChange={handleInputValidationChange}
            />

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
              <BankValidate
                className={style.mapField}
                onValidationChange={handleBankValidationChange}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
