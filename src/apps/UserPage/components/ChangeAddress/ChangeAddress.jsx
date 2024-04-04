// ChangeAddress.jsx
import React, { useState, useEffect } from "react";
import InputUser from "../InputUser/InputUser";
import Toast from "../ToastMessage/Toast";
import { fetchUpdateAddress } from "../../../../services/Service";

function ChangeAddress() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState(["", ""]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const updateAddress = async (e) => {
    e.preventDefault();
    if (isLoggedIn) {
      if (!validatePhoneNumber(phoneNumber)) {
        setToastMessage("Update Address Fail!");
        setToastType("error");
        setShowToast(true);
        console.log("Phone number is in wrong format");
        return;
      }
      try {
        const response = await fetchUpdateAddress(address, phoneNumber);
        setToastMessage("Update Address Success!");
        setToastType("success");
        setShowToast(true);
      } catch (error) {
        setToastMessage("Update Address Fail!");
        setToastType("error");
        setShowToast(true);
      }
    } else {
      console.log("User is not logged in!");
    }
  };

  const validatePhoneNumber = (number) => {
    let valid = true;
    const length = number.replace(/\D/g, "").length; // remove non-digit characters
    if (length < 10 || length > 10) {
      setErrors((prevErrors) => [
        "Phone numbers can only be 10 digits long!",
        prevErrors[1],
      ]);
      valid = false;
    }
    if (!/^\(\+\d{2,3}\) \d{9}$/.test(number) && !/^0\d{9}$/.test(number)) {
      setErrors((prevErrors) => [
        "Phone number must be in format 0xxxxxxxxxx or (+xx) xxxxxxxxx!",
        prevErrors[1],
      ]);
      valid = false;
    }
    if (/[^0-9\(\)\+\s]/.test(number)) {
      setErrors((prevErrors) => [
        "Phone number must only contain digits!",
        prevErrors[1],
      ]);
      valid = false;
    }
    if (valid) {
      setErrors(["", ""]);
    }
    return valid;
  };

  const fields = [
    {
      label: "New Phone Number *",
      type: "tel",
      placeholder: "Enter your new phone number",
      value: phoneNumber,
      onChange: (e) => setPhoneNumber(e.target.value),
    },
    {
      label: "New Address *",
      type: "text",
      placeholder: "Enter your new address",
      value: address,
      onChange: (e) => setAddress(e.target.value),
    },
  ];

  return (
    <div>
      <InputUser
        title="Change Address"
        fields={fields}
        onSubmit={updateAddress}
        errors={errors}
      />
      <Toast
        message={toastMessage}
        type={toastType}
        showToast={showToast}
        setShowToast={setShowToast}
      />
    </div>
  );
}

export default ChangeAddress;
