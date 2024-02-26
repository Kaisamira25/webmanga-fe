import React from "react";
import InputAll from "../../../components/InputAll";
import IconPassword from "../../../assets/icons/MaterialIconPassword";
import IconRepeat from "../../../assets/icons/MaterialIconRepeat";
function PasswordRequired() {
  const passwordFields = [
    { placeholder: "password", type: "password", svg: <IconPassword /> },
    { placeholder: "repeat password", type: "password", svg: <IconRepeat /> },
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

export default PasswordRequired;
