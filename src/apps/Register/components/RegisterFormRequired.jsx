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
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
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
  
    const postData = {
      email: email,
      fullName: fullName,
      password: password,
    };
    const json = JSON.stringify(postData);
    console.log(postData);
    navigate ("/otp")
    sessionStorage.setItem("email", email)
    const response = await registerApi(postData);
 
  }

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
        <div className="error-message">{errors.fullName}</div>
      </div>
      <div>
        <InputAll
          placeholder="Email"
          type="email"
          svg={<IconEmail />}
          name="email"
          onChange={handleInputEmail}
        />
        <div className="error-message">{errors.email}</div>
      </div>
      <div>
        <InputAll
          placeholder="Password"
          type="password"
          svg={<IconPassword />}
          name="password"
          onChange={handleInputPassword}
        />
        <div className="error-message">{errors.password}</div>
      </div>
      <div>
        <InputAll
          placeholder="Repeat Password"
          type="password"
          svg={<IconRepeat />}
          name="repeatPassword"
          onChange={handleInputRepeatPassword}
        />
        <div className="error-message">{errors.repeatPassword}</div>
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
