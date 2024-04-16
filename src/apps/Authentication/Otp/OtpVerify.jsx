import { useNavigate } from "react-router-dom";
import LoginButton from "../Login/components/LoginButton";
import OtpInput from "./components/OtpInput";
import OtpStyle from "./scss/Otp.module.scss";
import { useState } from "react";
import { verifyOtp } from "../../../services/Service";
function OtpVerify() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const handleChangeValueOtp = (e) => {
    setOtp(e.target.value);
  };
  const handleResend = () => {};
  const handleBackToRegister = () => {
    sessionStorage.removeItem("email");
    navigate("/register");
  };
  const handleVerifyEmail = async () => {
    const emailFromSessionStorge = sessionStorage.getItem("email");
    const dataJson = JSON.stringify({
      otp: otp,
      email: emailFromSessionStorge,
    });
    const response = await verifyOtp(dataJson);
    if (response.data.status == 1) {
      sessionStorage.removeItem("email");
      navigate("/login");
    } else {
      console.log("Wrong otp for email try again");
    }
  };
  return (
    <div className={OtpStyle.otpWrapper}>
      <div className={OtpStyle.otpForm}>
        <p>OTP</p>
        <form action="">
          <OtpInput onChangeAction={handleChangeValueOtp} />
          <p>
            If you still have not received the OTP code,{" "}
            <a onClick={handleResend}>Click here</a> to resend.
          </p>
          <div className={OtpStyle.otpButtonWrapper}>
            <LoginButton title={"Back"} handleAction={handleBackToRegister} />
            <LoginButton title={"Verify"} handleAction={handleVerifyEmail} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default OtpVerify;
