import React from "react";
import { Link } from "react-router-dom";

function ForgotYourPassword() {
  return (
    <div className="flex justify-between">
      <Link to={"/ForgotPassword"}>
        <button className="text-blue300 text-sm  hover:text-red-600 ">
          Quên mật khẩu ?
        </button>
      </Link>
    </div>
  );
}

export default ForgotYourPassword;
