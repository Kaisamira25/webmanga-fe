import { useNavigate } from "react-router-dom";
import LoginButton from "../Login/components/LoginButton";
import LoginInput from "../Login/components/LoginInput";
import LoginInputPassword from "../Login/components/LoginInputPassword";
import RegisterStyle from "./scss/Register.module.scss";
import { useState } from "react";
import { registerApi } from "../../../services/Service";
function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleGetUsernameValue = (e) => {
    setUsername(e.target.value);
  };
  const handleGetEmailValue = (e) => {
    setEmail(e.target.value);
  };
  const handleGetPasswordValue = (e) => {
    setPassword(e.target.value);
  };
  const handleGetRepeatPasswordValue = (e) => {
    setRepeatPassword(e.target.value);
  };

  const handleNavigateBack = () => {
    navigate("/login");
  };
  const handleRegister = async () => {
    const dataFromUser = {
      email: email,
      fullName: username,
      password: password,
    };
    const dataToJson = JSON.stringify(dataFromUser);
    navigate("/otp");
    const response = await registerApi(dataToJson);
    console.log(response.data.data.email);
    sessionStorage.setItem("email", response.data.data.email);
  };
  return (
    <div className={RegisterStyle.registerWrapper}>
      <div className={RegisterStyle.registerForm}>
        <p>Register</p>
        <form>
          {/* Reuse input from LoginInput */}
          <LoginInput
            label={"Username"}
            placeholder={"Username"}
            onChangeValue={handleGetUsernameValue}
          />
          <LoginInput
            label={"Email"}
            placeholder={"Email"}
            onChangeValue={handleGetEmailValue}
          />
          <LoginInputPassword
            label={"Password"}
            value={password}
            placeholder={"Password"}
            onChangeValue={handleGetPasswordValue}
          />
          <LoginInputPassword
            label={"Repeat password"}
            value={repeatPassword}
            placeholder={"Repeat password"}
            onChangeValue={handleGetRepeatPasswordValue}
          />
        </form>
        <p>
          Please check your mailbox. We have sent an OTP code to your email.
        </p>
        <div className={RegisterStyle.registerButton}>
          {/* Reuse button from LoginButton */}
          <LoginButton title={"Back"} handleAction={handleNavigateBack} />
          <LoginButton title={"Next"} handleAction={handleRegister} />
        </div>
      </div>
    </div>
  );
}

export default Register;
