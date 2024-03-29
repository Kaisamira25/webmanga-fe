import React, { useState } from "react";
import InputAll from "../../../components/Inputall";
import IconPassword from "../../../assets/icons/MaterialIconPassword";
import IconRepeat from "../../../assets/icons/MaterialIconRepeat";
import { newPasswordApi } from "../../../services/Service";
import ButtonInput from "../../../components/BtnInput";
import { Link, useNavigate } from "react-router-dom";

function PasswordRequired() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRepeatPasswordChange = (e) => {
    setRepeatPassword(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      if (password !== repeatPassword) {
        throw new Error("Passwords do not match");
      }

      const code = sessionStorage.getItem("verificationCode");
      console.log(code);
      console.log(typeof code);
      const response = await newPasswordApi(password, code);
      navigate("/login");

      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Failed ", error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:flex md:flex-col w-auto ">
      <InputAll
        placeholder="Password"
        type="password"
        svg={<IconPassword />}
        value={password}
        onChange={handlePasswordChange}
      />
      <InputAll
        placeholder="Repeat Password"
        type="password"
        svg={<IconRepeat />}
        value={repeatPassword}
        onChange={handleRepeatPasswordChange}
      />
      <div className="">
        <ButtonInput
          type={"button"}
          placeholder={"Continue"}
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}

export default PasswordRequired;
