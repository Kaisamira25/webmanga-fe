import React from "react";
import InputAll from "../../../components/Inputall";
import IconPassword from "../../../assets/icons/MaterialIconPassword";
import IconEmail from "../../../assets/icons/MaterialIconEmail";

function LoginForm() {
  const passwordFields = [
    { placeholder: "Email", type: "Email", svg: <IconEmail /> },
    { placeholder: "Password", type: "Password", svg: <IconPassword /> },
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

export default LoginForm;
