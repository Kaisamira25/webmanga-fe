import React, { useState } from "react";
import InputAll from "../../../components/Inputall";
import OtpIcon from "../../../assets/icons/MaterialOtpIcon";
import { useNavigate } from "react-router-dom";
import ButtonInput from "../../../components/BtnInput";
import { verifyOtp } from "../../../services/Service";

function OtpRequired() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const handleContinue = async () => {
    
  };

  return (
    <div className="grid grid-cols-1 md:flex md:flex-col w-auto ">
      <InputAll
        placeholder="OTP"
        type="text"
        svg={<OtpIcon />}
        onChange={(e) => setOtp(e.target.value)}
      />
      <div>
        <ButtonInput
          type="button"
          placeholder="Continue"
          onClick={handleContinue}
        />
      </div>
    </div>
  );
}

export default OtpRequired;
