import React, { useState } from "react";
import InputAll from "../../../components/Inputall";
import IconEmail from "../../../assets/icons/MaterialIconEmail";
import ButtonInput from "../../../components/BtnInput";
import { Link, useNavigate } from "react-router-dom";
import { forgotApi } from "../../../services/Service";

function EmailRequired() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleContinue = async () => {
    try {
      const emaildata = {
        email: email,
      };
      const json = JSON.stringify(emaildata);
      sessionStorage.setItem("email", email);
      const response = await forgotApi({ email });
      navigate("/otpForgotPasswordPage");
    } catch (error) {
      console.error("Failed to call API:", error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:flex md:flex-col w-auto ">
      <InputAll
        placeholder="Email"
        type="email"
        svg={<IconEmail />}
        value={email}
        onChange={handleEmailChange}
      />
      <div className="flex gap-4 ">
        <div className="flex-1 ml-2">
          <Link to={"/login"}>
            <ButtonInput type={"button"} placeholder={"Cancel "} />
          </Link>
        </div>
        <div className="flex-1 mr-2">
          <ButtonInput
            type={"button"}
            placeholder={"Continue"}
            onClick={handleContinue}
          />
        </div>
      </div>
    </div>
  );
}
export default EmailRequired;
