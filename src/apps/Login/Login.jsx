import React from "react";
import ButtonInput from "../../components/ButtonInput";
import LoginForm from "./Components/LoginForm";
import ForgotYourPassword from "./Components/ForgotYourButton";
import RegisterPrompt from "./Components/RegisterPrompt";

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-green400">
      <div className="bg-white100 p-8 rounded-lg shadow-lg  md:w-96 w-96">
        <div>
          <form>
            <div>
              <h2 className="text-4xl font-pacifico mb-4 text-center ">
                Đăng Nhập
              </h2>
            </div>
            <div>
              <LoginForm />
            </div>
            <div >
              <ForgotYourPassword />
            </div>
            <div className="mt-2">
              <ButtonInput type={"button"} placeholder={"đăng nhập"} />
            </div>

            <div className="mt-2">
              <RegisterPrompt />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
