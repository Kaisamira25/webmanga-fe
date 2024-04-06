import { useState } from "react";
import LoginButton from "./components/LoginButton";
import LoginInput from "./components/LoginInput";
import LoginStyle from "./scss/Login.module.scss";
import { loginApi } from "../../../services/Service";
import { useNavigate } from "react-router-dom";
import LoginInputPassword from "./components/LoginInputPassword";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChangeValueEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const handleChangeValuePassword = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  const handleLogin = async () => {
    const data = {
      email: email,
      password: password,
    };
    const dataJson = JSON.stringify(data);
    const response = await loginApi(dataJson);
    if (response.data.status == 1) {
      sessionStorage.setItem("role", "CUSTOMER");
      navigate("/home");
    } else {
      console.log("Login fail");
    }
  };
  const navigateToRegister = () => {
    navigate("/register");
  };
  const navigateToResetPassword = () => {
    navigate("/resetpassword")
  }
  return (
    <div className={LoginStyle.loginWrapper}>
      <div className={LoginStyle.loginForm}>
        <p>Login</p>
        <form>
          <LoginInput
            label={"Email"}
            placeholder={"Email"}
            type={"text"}
            onChangeValue={handleChangeValueEmail}
          />
          <LoginInputPassword
            label={"Password"}
            placeholder={"Password"}
            onChangeValue={handleChangeValuePassword}
          />
        </form>
        <span>
          Forgot password? <a onClick={navigateToResetPassword}>Click here</a>
        </span>
        <LoginButton handleAction={handleLogin} title={"Login"} />
        <div className={LoginStyle.register}>
          <span>
            Don't have an account? <a onClick={navigateToRegister}>Register</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
