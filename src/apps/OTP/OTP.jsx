import React from "react";
import OTPRequired from "./components/EmailOTP";
import ButtonInput from "../../components/BtnInput";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

function OTP() {
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

  return (
    <div className="flex justify-center items-center min-h-screen bg-green400">
      <div className="bg-white100 p-8 rounded-lg shadow-lg h-80 md:w-96 w-96">
        <div>
          <form className="flex flex-col w-auto h-auto items-center">
            <div>
              <h2 className="text-4xl font-Confortaa mb-4 text-center">
                OTP verification
              </h2>
            </div>
            <div>
              <h1 className="text-base mb-1">
                Enter the code we just sent you
              </h1>
            </div>
            <div>
              <OTPRequired />
            </div>
            <div>
              <div>
                <ButtonInput
                  type={"button"}
                  placeholder={"Continue"}
                  onClick={handleContinue}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default OTP;
