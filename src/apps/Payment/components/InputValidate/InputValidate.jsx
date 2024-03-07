import React, { useState } from "react";
import InputField from "../../../../components/InputField/InputField";

function InputValidate({ className }) {
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleChange = (key, value) => {
    switch (key) {
      case "email":
        setEmail(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "phone":
        setPhone(value);
        break;
      default:
        break;
    }

    validateInput(key, value);
  };

  const validateInput = (key, value) => {
    switch (key) {
      case "email":
        setEmailError(
          value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
            ? ""
            : "Email không đúng"
        );
        break;
      case "address":
        setAddressError(value.trim() ? "" : "Thiếu địa chỉ");
        break;
      case "phone":
        setPhoneError(value.match(/^[0-9]{10}$/) ? "" : "SĐT không đúng");
        break;
      default:
        break;
    }
  };

  return (
    <div className={className}>
      <div>
        <InputField
          label={"Email"}
          type={"email"}
          placeholder={"Email"}
          value={email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
        {emailError && <span>{emailError}</span>}
      </div>
      <div>
        <InputField
          label={"Địa chỉ"}
          type={"text"}
          placeholder={"Địa chỉ (VD: 123 đường số 3)"}
          value={address}
          onChange={(e) => handleChange("address", e.target.value)}
        />
        {addressError && <span>{addressError}</span>}
      </div>
      <div>
        <InputField
          label={"SĐT"}
          type={"text"}
          placeholder={"Số điện thoại"}
          value={phone}
          onChange={(e) => handleChange("phone", e.target.value)}
        />
        {phoneError && <span>{phoneError}</span>}
      </div>
    </div>
  );
}

export default InputValidate;
