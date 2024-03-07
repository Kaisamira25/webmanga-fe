import React from "react";
import { useNavigate } from "react-router-dom";

function SignInPrompt() {
  const navigate = useNavigate();

  const handleToLogin = () => {
    navigate("/Login");
  };
  return (
    <div className="flex ">
      <p className="text-sm">Đã có tài khoản ?</p>
      <button
        className="text-blue300 text-sm   hover:text-red-600"
        onClick={handleToLogin}
      >
        {"\u00a0"}Đăng Nhập
      </button>
    </div>
  );
}

export default SignInPrompt;
