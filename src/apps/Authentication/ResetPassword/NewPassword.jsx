import NewPasswordStyle from "./scss/NewPassword.module.scss";
import LoginInputPassword from "../Login/components/LoginInputPassword";
import LoginButton from "../Login/components/LoginButton";
import { useState } from "react";
import { newPasswordApi } from "../../../services/Service";
import { useNavigate } from "react-router-dom";
function NewPassword() {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const otp = sessionStorage.getItem("otp");
  const handleResetPassword = async () => {
    const dataJson = JSON.stringify({
      code: otp,
      newPassword: newPassword,
    });
    const response = await newPasswordApi(dataJson);
    navigate("/login");
  };
  const handleChangeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };
  const handleRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };
  const handleNavigateToLogin = (e) => {
    navigate("/login")
  }
  return (
    <div className={NewPasswordStyle.newPasswordWrapper}>
      <div className={NewPasswordStyle.newPasswordForm}>
        <form action="">
          <p>Reset your password</p>
          <p>
            Enter a new password to reset the password on your account. We'll
            ask for this password whenever you login.
          </p>
          <div className={NewPasswordStyle.newPasswordInput}>
            <LoginInputPassword
              label={"New password"}
              placeholder={"New password"}
              onChangeValue={handleChangeNewPassword}
            />
            <LoginInputPassword
              label={"Repeat password"}
              placeholder={"Repeat password"}
              onChangeValue={handleRepeatPassword}
            />
          </div>
          <div className={NewPasswordStyle.newPasswordButton}>
            <LoginButton
              title={"Reset password"}
              handleAction={handleResetPassword}
            />
          </div>
          <p>
            Remember password? <a onClick={handleNavigateToLogin}>Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default NewPassword;
