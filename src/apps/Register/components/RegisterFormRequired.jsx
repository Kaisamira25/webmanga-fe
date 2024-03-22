import React, { useState } from "react";
import InputAll from "../../../components/Inputall";
import IconPassword from "../../../assets/icons/MaterialIconPassword";
import IconRepeat from "../../../assets/icons/MaterialIconRepeat";
import IconEmail from "../../../assets/icons/MaterialIconEmail";
import IconUser from "../../../assets/icons/MaterialIconUser";
import ButtonInput from "../../../components/BtnInput";
import { registerApi } from "../../../services/Service";

function RegisterFormRequired() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    registerApi(formData)
      .then((response) => {
        console.log("Registration successful:", response.data);
       
      })
      .catch((error) => {
        console.error("Registration failed:", error.response.data);
      });
  };

  return (
    <div className="grid grid-cols-1 md:flex md:flex-col w-auto ">
      <div>
        <InputAll
          placeholder="UserName"
          type="text"
          svg={<IconUser />}
          name="fullName"
          value={formData.username}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <InputAll
          placeholder="Email"
          type="email"
          svg={<IconEmail />}
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <InputAll
          placeholder="Password"
          type="password"
          svg={<IconPassword />}
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <InputAll
          placeholder="Repeat Password"
          type="password"
          svg={<IconRepeat />}
          name="repeatPassword"
          value={formData.repeatPassword}
          onChange={handleInputChange}
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
