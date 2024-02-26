import React from "react";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import OTPPage from "./pages/OTP/OTPPage";
import ForgotPasswordPage from "./pages/ForgotPassword/ForgotPasswordPage";

function Views() {
  return (
    <div className="bg-gradient-to-r from-[#DCEFE5] to-[#b7e9d3] h-screen">
      <LoginPage />
      <RegisterPage />
      <OTPPage />
      <ForgotPasswordPage />
    </div>
  );
}

export default Views;
