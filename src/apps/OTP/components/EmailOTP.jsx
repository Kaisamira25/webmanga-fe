import React, { useState } from "react";
import InputAll from "../../../components/Inputall";
import OtpIcon from "../../../assets/icons/MaterialOtpIcon";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ButtonInput from "../../../components/BtnInput";
import { verifyOtp } from "../../../services/Service";

function OtpRequired() {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;
  const from = state ? state.from : null;
  const [otp, setOtp] = useState("");
  const redirectTo = (from) => {
    if (from === "/Register") {
      return "/Login";
    } else if (from === "/ForgotPassword") {
      return "/ForgotPasswordConfirm";
    }
  };
  console.log(otp);
  const handleContinue = async () => {
    try {
      const response = await verifyOtp(otp);
      console.log("OTP verification successful:", response.data);

      const destination = redirectTo(from);
      navigate(destination);
    } catch (error) {
      console.log(typeof otp);
      console.error("OTP verification failed:", error.response.data);
    }
  };

  return (
    <div className="grid grid-cols-1 md:flex md:flex-col w-auto ">
      <InputAll
        placeholder="OTP"
        type="text"
        svg={<OtpIcon />}
        value={otp}
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
