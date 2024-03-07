import React, { useState } from "react";
import InputField from "../../../../components/InputField/InputField";

function BankValidate({ className }) {
  const [ownerName, setOwnerName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const [ownerNameError, setOwnerNameError] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [expiryDateError, setExpiryDateError] = useState("");
  const [cvvError, setCvvError] = useState("");

  const handleChange = (key, value) => {
    switch (key) {
      case "ownerName":
        setOwnerName(value);
        validateInput(key, value);
        break;
      case "cardNumber":
        setCardNumber(value);
        validateInput(key, value);
        break;
      case "expiryDate":
        setExpiryDate(value);
        validateInput(key, value);
        break;
      case "cvv":
        setCvv(value);
        validateInput(key, value);
        break;
      default:
        break;
    }
  };

  const validateInput = (key, value) => {
    switch (key) {
      case "ownerName":
        setOwnerNameError(value.trim() ? "" : "Missing cardholder's name");
        break;
      case "cardNumber":
        setCardNumberError(
          value.trim() && /^\d{16}$/.test(value)
            ? ""
            : "Card number must be 16 digits"
        );
        break;
      case "expiryDate":
        setExpiryDateError(value.trim() ? "" : "Missing expiration date");
        break;
      case "cvv":
        setCvvError(
          value.trim() && /^\d{3,4}$/.test(value)
            ? ""
            : "CVV must be 3 or 4 digits"
        );
        break;
      default:
        break;
    }
  };

  return (
    <div className={className}>
      <div>
        <InputField
          label={"Cardholder's Name"}
          type={"text"}
          placeholder={"Do Nguyen Trong Kiet"}
          value={ownerName}
          onChange={(e) => handleChange("ownerName", e.target.value)}
        />
        {ownerNameError && <span>{ownerNameError}</span>}
      </div>
      <div>
        <InputField
          label={"Card Number"}
          type={"text"}
          placeholder={"1231 1313 1321"}
          value={cardNumber}
          onChange={(e) => handleChange("cardNumber", e.target.value)}
        />
        {cardNumberError && <span>{cardNumberError}</span>}
      </div>
      <div>
        <InputField
          label={"Expiration Date"}
          type={"month"}
          value={expiryDate}
          onChange={(e) => handleChange("expiryDate", e.target.value)}
        />
        {expiryDateError && <span>{expiryDateError}</span>}
      </div>
      <div>
        <InputField
          label={"CVV/CVC"}
          type={"text"}
          placeholder={"CVV/CVC"}
          value={cvv}
          onChange={(e) => handleChange("cvv", e.target.value)}
        />
        {cvvError && <span>{cvvError}</span>}
      </div>
    </div>
  );
}

export default BankValidate;
