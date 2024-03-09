import React from "react";
import { useNavigate } from "react-router-dom";

function RegisterPrompt() {
  const navigate = useNavigate();

  const handleToRegister = () => {
    navigate("/Register");
  };
  return (
    <div className="flex ">
      <p className="text-sm">no acccount? {"\u00a0"}</p>

      <button
        className="text-blue300 text-sm   hover:text-red-600"
        onClick={handleToRegister}
      >
       Resgister Now!
      </button>
    </div>
  );
}

export default RegisterPrompt;
