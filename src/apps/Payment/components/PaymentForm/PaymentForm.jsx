import React from "react";
import Title from "../../../../components/Title/Title";
import InputField from "../../../../components/InputField/InputField";
import SelectField from "../../../../components/SelectField/SelectField";
import MapField from "../MapField/MapField";
import style from "./PaymentForm.module.scss";

export default function PaymentForm() {
  const inputField = [
    { label: "Email", type: "email", placeholder: "Email" },
    {
      label: "Địa chỉ",
      type: "text",
      placeholder: "Địa chỉ (VD: 123 đường số 3)",
    },
    { label: "SĐT", type: "text", placeholder: "Số điện thoại" },
  ];

  const bankField = [
    { label: "Số thẻ", type: "text", placeholder: "1231 1313 1321" },
    { label: "Tên chủ thẻ", type: "text", placeholder: "Nguyễn Văn A" },
    { label: "Ngày hết hạn", type: "month" },
    { label: "CVV/CVC", type: "text", placeholder: "CVV/CVC" },
  ];

  const options = [
    "Trả tiền trực tiếp",
    "Thanh toán thẻ ngân hàng",
    "Thanh toán mã QR",
    "Thanh toán Visa",
  ];
  return (
    <div className={style.container}>
      <div className={style.title}>
        <Title title={"Payments"} />
      </div>
      <div className={style.wrapper}>
        <p className={style.title}>Thông tin thanh toán</p>
        <div className={style.inputField}>
          <div className={style.left}>
            <MapField inputField={inputField} className={style.mapField} />
            <SelectField
              label={"Phương thức thanh toán"}
              placeholder={"Mời chọn phương thức thanh toán"}
              options={options}
            />
          </div>
          <div className={style.right}>
            <MapField inputField={bankField} className={style.mapField} />
          </div>
        </div>
      </div>
    </div>
  );
}
