import React from "react";
import InputAll from "../../../components/Inputall";
import IconEmail from "../../../assets/icons/MaterialIconEmail";
function EmailRequired() {
  const passwordFields = [
    { placeholder: "Email", type: "Email", svg: <IconEmail /> },
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

export default EmailRequired;
