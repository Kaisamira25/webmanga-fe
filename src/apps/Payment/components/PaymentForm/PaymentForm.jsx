import React, { useEffect, useState } from "react";
import Title from "../../../../components/Title/Title";
import SelectField from "../../../../components/SelectField/SelectField";
import style from "./PaymentForm.module.scss";
import InputValidate from "../InputValidate/InputValidate";
import BankValidate from "../InputValidate/BankValidate";

export default function PaymentForm() {
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    "Trả tiền trực tiếp",
    "Thanh toán thẻ ngân hàng",
    "Thanh toán mã QR",
    "Thanh toán Visa",
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
        <p className={style.title}>Thông tin thanh toán</p>
        <div className={style.inputField}>
          <div
            className={`${
              selectedOption === "Thanh toán thẻ ngân hàng" ||
              selectedOption === "Thanh toán Visa"
                ? style.left
                : style.full
            } `}
          >
            <InputValidate className={style.mapField} />

            <SelectField
              label={"Phương thức thanh toán"}
              placeholder={"Mời chọn phương thức thanh toán"}
              options={options}
              value={selectedOption}
              onChange={handleSelectChange}
            />
          </div>
          {(selectedOption === "Thanh toán thẻ ngân hàng" ||
            selectedOption === "Thanh toán Visa") && (
            <div className={style.right}>
              <BankValidate className={style.mapField} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
