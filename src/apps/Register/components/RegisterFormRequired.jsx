import React, { useState } from "react";
import InputAll from "../../../components/Inputall";
import IconPassword from "../../../assets/icons/MaterialIconPassword";
import IconRepeat from "../../../assets/icons/MaterialIconRepeat";
import IconEmail from "../../../assets/icons/MaterialIconEmail";
import IconUser from "../../../assets/icons/MaterialIconUser";
import ButtonInput from "../../../components/BtnInput";
import { registerApi } from "../../../services/Service";
import { useNavigate } from "react-router-dom";

function RegisterFormRequired() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [fullName, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleInputEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleInputFullName = (e) => {
    setFullname(e.target.value);
  };
  const handleInputPassword = (e) => {
    setPassword(e.target.value);
  };
  const handleInputRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };
  const handleRegister = async () => {
    // //user ko để trống
    // const Userpattern = /(?=.*[a-z])(?=.*[A-Z])/;
    // if (!Userpattern.test(fullName)) {
    //   alert(" Username cannot be blank");
    //   return;
    // }
    //email thieu @ = cook
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Invalid email format");
      return;
    }

    //định dạng mật khẩu
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
    if (!passwordPattern.test(password)) {
      alert(
        "Password is in wrong format, requires minimum length 8, must contain letters and numbers, must have special characters"
      );
      return;
    }

    // Kiểm tra xác nhận mật khẩu
    if (password !== repeatPassword) {
      alert("Passwords do not match");
      return;
      // Nếu tất cả  đúng thì bay xuốn thg dưới
    }
    const postData = {
      email: email,
      fullName: fullName,
      password: password,
    };
    const json = JSON.stringify(postData);
    console.log(postData);
    navigate("/otp");
    sessionStorage.setItem("email", email);
    const response = await registerApi(postData);
  };

  return (
    <div className="grid grid-cols-1 md:flex md:flex-col w-auto ">
      <div>
        <InputAll
          placeholder="UserName"
          type="text"
          svg={<IconUser />}
          name="fullName"
          onChange={handleInputFullName}
        />
      </div>
      <div>
        <InputAll
          placeholder="Email"
          type="email"
          svg={<IconEmail />}
          name="email"
          onChange={handleInputEmail}
        />
      </div>
      <div>
        <InputAll
          placeholder="Password"
          type="password"
          svg={<IconPassword />}
          name="password"
          onChange={handleInputPassword}
        />
      </div>
      <div>
        <InputAll
          placeholder="Repeat Password"
          type="password"
          svg={<IconRepeat />}
          name="repeatPassword"
          onChange={handleInputRepeatPassword}
        />
      </div>

      <div>
        <ButtonInput
          type="button"
          placeholder="Register"
          onClick={handleRegister}
        />
      </div>
    </div>
  );
}

export default RegisterFormRequired;
