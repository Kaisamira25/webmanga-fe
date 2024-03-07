import React, { useState } from "react";
import OTPRequired from "./components/EmailOTP";
import ButtonInput from "../../components/BtnInput";

function OTP() {
  const [otpValue, setOTPValue] = useState("");
  const handleOTPChange = (newValue) => {
    setOTPValue(newValue);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-green400">
      <div className="bg-white100 p-8 rounded-lg shadow-lg h-80  md:w-96 w-96">
        <div>
          <form className="flex flex-col w-auto h-auto items-center">
            <div>
              <h2 className="text-4xl font-Confortaa mb-4 text-center">
                Xác minh OTP
              </h2>
            </div>
            <div>
              <h1 className="text-base mb-1">
                Hãy nhập mã chúng tôi vừa gửi cho bạn
              </h1>
            </div>
            <div>
              <OTPRequired />
            </div>
            <div>
              <div>
                <ButtonInput type={"button"} placeholder={"Continue"} />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OTP;
