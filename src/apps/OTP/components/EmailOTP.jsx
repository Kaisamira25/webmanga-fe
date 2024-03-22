import React from "react";
import InputAll from "../../../components/Inputall";
import OtpIcon from "../../../assets/icons/MaterialOtpIcon";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import ButtonInput from "../../../components/BtnInput";
function OtpRequired() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const from = state ? state.from : null;
  console.log(from);

  const redirectTo = (from) => {
    if (from === "/Register") {
      return "/Login";
    } else if (from === "/ForgotPassword") {
      return "/ForgotPasswordConfirm";
    }
  };

  const handleContinue = () => {
    const destination = redirectTo(from);
    navigate(destination);
  };
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
      <div>
        <ButtonInput
          type={"button"}
          placeholder={"Continue"}
          onClick={handleContinue}
        />
      </div>
    </div>
  );
}

export default OtpRequired;
