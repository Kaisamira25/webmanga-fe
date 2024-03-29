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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); 
  };

  const handleRegister = () => {
    if (!validateForm()) {
      return;
    }

    registerApi(formData)
      .then((response) => {
        console.log("Registration successful:", response.data);
        const emailForVerify = response.data.data.email;
        sessionStorage.setItem("email", emailForVerify);
        navigate("/Otp", { state: { from: "/Register" } });
      })
      .catch((error) => {
        console.error("Registration failed:", error.data);
      });
  };

  const validateForm = () => {
    let isValid = true;
    const { fullName, email, password, repeatPassword } = formData;
    const newErrors = { ...errors };

    // Validate full name
    if (!fullName) {
      newErrors.fullName = "Full name is required";
      isValid = false;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    // Validate password
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
    if (!passwordPattern.test(password)) {
      newErrors.password =
        "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character";
      isValid = false;
    }

    // Validate repeat password
    if (password !== repeatPassword) {
      newErrors.repeatPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return (
    <div className="grid grid-cols-1 md:flex md:flex-col w-auto ">
      <div>
        <InputAll
          placeholder="UserName"
          type="text"
          svg={<IconUser />}
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
        />
        <div className="error-message">{errors.fullName}</div>
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
        <div className="error-message">{errors.email}</div>
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
        <div className="error-message">{errors.password}</div>
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
