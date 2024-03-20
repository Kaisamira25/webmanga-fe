import React, { useState } from "react";
import InputAll from "../../../components/Inputall";
import ButtonInput from "../../../components/BtnInput";
import ForgotYourPassword from "./ForgotButon";
import IconPassword from "../../../assets/icons/MaterialIconPassword";
import IconEmail from "../../../assets/icons/MaterialIconEmail";
// import { Link } from "react-router-dom";
import { loginApi } from "../../../services/Service";
import { toast } from "react-toastify";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };
  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("email/password is incorrect");
    }
    try {
      const data = {
        email: email,
        password: password,
      };
      console.log(JSON.stringify(data));
      const res = await loginApi(data);
    } catch {}
  };

  return (
    <div className="grid grid-cols-1 md:flex md:flex-col w-auto ">
      <InputAll
        placeholder="email"
        type="email"
        svg={<IconEmail />}
        value={email}
        onChange={handleEmail}
      />
      <InputAll
        placeholder="password"
        type="password"
        svg={<IconPassword />}
        value={password}
        onChange={handlePassword}
      />
      <div>
        <ForgotYourPassword />
      </div>
      <div className="mt-2">
        <ButtonInput
          type={"button"}
          placeholder={"Login"}
          onClick={handleLogin}
        />
      </div>
    </div>
  );
}

export default LoginForm;
