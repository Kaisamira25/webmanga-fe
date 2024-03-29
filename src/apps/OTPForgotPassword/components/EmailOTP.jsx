import React, { useState } from "react";
import InputAll from "../../../components/Inputall";
import ButtonInput from "../../../components/BtnInput";
import { useNavigate } from "react-router-dom";

function EnterCode() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleContinue = () => {
    sessionStorage.setItem("verificationCode", code);
    console.log(typeof code);
    navigate("/ForgotPasswordConfirm");
  };

  return (
    <div>
      <InputAll
        placeholder="OTP"
        type="text"
        value={code}
        onChange={handleCodeChange}
      />
      <ButtonInput
        type="button"
        placeholder="Continue"
        onClick={handleContinue}
      />
    </div>
  );
}

export default EnterCode;
