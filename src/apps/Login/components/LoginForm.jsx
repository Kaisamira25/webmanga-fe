import React, { useState } from "react";
import InputAll from "../../../components/Inputall";
import ButtonInput from "../../../components/BtnInput";
import ForgotYourPassword from "./ForgotButon";
import IconPassword from "../../../assets/icons/MaterialIconPassword";
import IconEmail from "../../../assets/icons/MaterialIconEmail";
import { loginApi } from "../../../services/Service";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isInvalidPassword, setIsInvalidPassword] = useState(false); // State để kiểm tra mật khẩu không hợp lệ
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setIsInvalidPassword(false); // Reset trạng thái kiểm tra mật khẩu không hợp lệ khi người dùng nhập mật khẩu mới
  };

  const handleLogin = async () => {
    navigate("/home");
    // if (!email || !password) {
    //   // toast.error("Email/password is incorrect");
    //   return;
    // }

    // try {
    //   const data = {
    //     email: email,
    //     password: password,
    //   };

    //   const response = await loginApi(data);
    //   console.log("Login successful:", response);

    //   navigate("/home");
    // } catch (error) {
    //   console.error("Login failed:", error);
    //   // toast.error("Login failed. Please try again.");
    // }
  };

  return (
    <div className="grid grid-cols-1 md:flex md:flex-col w-auto ">
      <InputAll
        placeholder="Email"
        type="email"
        svg={<IconEmail />}
        value={email}
        onChange={handleEmail}
      />
      <InputAll
        placeholder="Password"
        type="password"
        svg={<IconPassword />}
        value={password}
        onChange={handlePassword}
        // Thêm className để hiển thị phản hồi trực quan nếu mật khẩu không hợp lệ
        className={isInvalidPassword ? "invalid-password" : ""}
      />
      <div className="error-message">
        {isInvalidPassword && <p>Invalid email/password</p>}
      </div>
      <div>
        {/* <ForgotYourPassword /> */}
      </div>
      <div className="mt-2">
        <ButtonInput type="button" placeholder="Login" onClick={handleLogin} />
      </div>
      
    </div>
  );
}

export default LoginForm;
