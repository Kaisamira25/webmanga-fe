import { useNavigate } from "react-router-dom";
import LoginButton from "../Login/components/LoginButton";
import OtpInput from "./components/OtpInput";
import OtpStyle from "./scss/Otp.module.scss";
import { useState } from "react";
import { verifyOtp, verifyResetPasswordCode } from "../../../services/Service";
function OtpResetPassword() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const handleChangeValueOtp = (e) => {
    setOtp(e.target.value);
  };
  const handleResend = () => {};
  const handleBackToResetPassword = () => {
    navigate("/resetpassword");
  };
  const handleVerifyEmail = async () => {
    const response = await verifyResetPasswordCode(otp);
    sessionStorage.setItem("otp", otp);
    console.log(response.data.status);
    if (response.data.status == 1) {
      navigate("/newpassword");
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
            <LoginButton
              title={"Back"}
              handleAction={handleBackToResetPassword}
            />
            <LoginButton title={"Verify"} handleAction={handleVerifyEmail} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default OtpResetPassword;
