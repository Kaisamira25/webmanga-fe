import React from "react";
import { useNavigate } from "react-router-dom";

function SignInPrompt() {
  const navigate = useNavigate();

  const handleToLogin = () => {
    navigate("/login");
  };
  return (
    <div className="flex ">
      <p className="text-sm">Already have an account?</p>
      <button
        className="text-blue300 text-sm   hover:text-red-600"
        onClick={handleToLogin}
      >
        {"\u00a0"}Login
      </button>
    </div>
  );
}

export default SignInPrompt;
