import React from "react";
import ButtonInput from "../../../components/ButtonInput";
function SignInPrompt() {
  return (
    <div className="flex ">
      <p className="text-sm">Đã có tài khoản ?</p>
      <button className="text-blue300 text-sm   hover:text-red-600">
        {" "}
        Đăng Nhập
      </button>
    </div>
  );
}

export default SignInPrompt;
