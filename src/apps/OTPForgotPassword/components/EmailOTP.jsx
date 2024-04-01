import React, { useState } from "react";
import InputAll from "../../../components/Inputall";
import ButtonInput from "../../../components/BtnInput";
import { useNavigate } from "react-router-dom";
import { verifyResetPasswordCode } from "../../../services/Service";

function EnterCode() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleContinue = async () => {
    sessionStorage.setItem("verificationCode", code);
    const response = await verifyResetPasswordCode(code);
    console.log(response.data)
    navigate("/forgotPasswordConfirm");
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
