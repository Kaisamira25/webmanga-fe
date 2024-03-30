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
    const emailFromSession = sessionStorage.getItem("email");
    const customerData = {
      otp: otp,
      email: emailFromSession
    };
    const customerDataJson = JSON.stringify(customerData);
    console.log(customerDataJson)
    const response = await verifyOtp(customerDataJson);
    if(response.data.status == 1) {
      // console.log(response.data.status);
      // Thông báo successful ra rồi cho ngủ 1 xí r hãy chuyển trang 
      
      setTimeout(() => {
        navigate("/login")
      },2000)
    } else {
      // Thông báo xác thực thức bại tại đây rồi không navigate đi đâu hết
      console.log("Wrong otp");
    }
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
