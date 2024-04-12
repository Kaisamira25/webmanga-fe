import React, { useEffect, useState } from "react";
import InputField from "../../../../components/InputField/InputField";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

function InputValidate({ className, onValidationChange }) {
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

  const handleLoad = async (key) => {
    try {
      const decoded = jwtDecode(sessionStorage.getItem('accessToken')).customerId;
      const response = await axios.get(
        "http://localhost:8080/api/v1/customer/" + decoded,
        {}
      );
      const customer = response.data.data;
      switch (key) {
        case "email":
          setEmail(customer.email);
          break;
        case "address":
          setAddress(customer.addresses.address.trim());
          break;
        case "phone":
          setPhone(customer.addresses.phoneNumber);
          break;
        default:
          break;
      }
    } catch (error) {
      console.error("Error fetching customer data:", error);
    }
  };
  useEffect(() => {
    handleLoad("email");
    handleLoad("address");
    handleLoad("phone");
  }, []);
  useEffect(() => {
    localStorage.setItem("UserData", JSON.stringify({ email, address, phone }));
  }, [email, phone, address]);
  const validateInput = (key, value) => {
    switch (key) {
      case "email":
        setEmailError(
          value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
            ? ""
            : "Invalid email format"
        );
        break;
      case "address":
        setAddressError(value.trim() ? "" : "Address is required");
        break;
      case "phone":
        setPhoneError(value.match(/^[0-9]{10}$/) ? "" : "Invalid phone number");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const isValid =
      email.trim() &&
      address.trim() &&
      phone.trim() &&
      !emailError &&
      !addressError &&
      !phoneError;

    onValidationChange(isValid);
  }, [
    email,
    address,
    phone,
    emailError,
    addressError,
    phoneError,
    onValidationChange,
  ]);

  return (
    <div className={className}>
      <div>
        <InputField
          label={"Email"}
          type={"email"}
          placeholder={"Email"}
          value={email}
          onChange={(e) => handleChange("email", e.target.value)}
          onLoad={() => handleLoad("email")}
        />
        {emailError && <span>{emailError}</span>}
      </div>
      <div>
        <InputField
          label={"Address"}
          type={"text"}
          placeholder={"Address (e.g., 123 Street)"}
          value={address}
          onChange={(e) => handleChange("address", e.target.value)}
          onLoad={() => handleLoad("address")}
        />
        {addressError && <span>{addressError}</span>}
      </div>
      <div>
        <InputField
          label={"Phone"}
          type={"text"}
          placeholder={"Phone number"}
          value={phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          onLoad={() => handleLoad("phone")}
        />
        {phoneError && <span>{phoneError}</span>}
      </div>
    </div>
  );
}

export default InputValidate;
