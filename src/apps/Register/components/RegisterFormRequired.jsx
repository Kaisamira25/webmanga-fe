import React from "react";
import InputAll from "../../../components/Inputall";
import IconPassword from "../../../assets/icons/MaterialIconPassword";
import IconRepeat from "../../../assets/icons/MaterialIconRepeat";
import IconEmail from "../../../assets/icons/MaterialIconEmail";
import IconUser from "../../../assets/icons/MaterialIconUser";
function RegisterFormRequired() {
  const passwordFields = [
    { placeholder: "UserName", type: "text", svg: <IconUser /> },
    { placeholder: "Email", type: "Email", svg: <IconEmail /> },
    { placeholder: "Password", type: "password", svg: <IconPassword /> },
    { placeholder: "Repeat Password", type: "password", svg: <IconRepeat /> },
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

export default RegisterFormRequired;
