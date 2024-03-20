import React from "react";
import InputAll from "../../../components/Inputall";
import OtpIcon from "../../../assets/icons/MaterialOtpIcon";

function OtpRequired() {
  const passwordFields = [
    { placeholder: "OTP", type: "text", svg: <OtpIcon /> },
  ];

  return (
    <div className="grid grid-cols-1 md:flex md:flex-col w-auto ">
      {passwordFields.map((field, index) => (
        <InputAll
          key={index}
          placeholder={field.placeholder}
          type={field.type}
          svg={field.svg}
        />
      ))}
    </div>
  );
}

export default OtpRequired;
