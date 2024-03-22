import React from "react";
import ButtonInput from "../../components/BtnInput";
import LoginForm from "./components/LoginForm";
import ForgotYourPassword from "./components/ForgotYourButton";
import RegisterPrompt from "./components/RegisterPrompt";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-green400">
      <div className="bg-white100 p-8 rounded-lg shadow-lg  md:w-96 w-96">
        <div>
          <form className="gap-16">
            <div>
              <h2 className="text-4xl font-pacifico mb-4 text-center ">
                Login
              </h2>
            </div>
            <div>
              <LoginForm />
            </div>
            <div>
              <ForgotYourPassword />
            </div>
            <div className="mt-2">
              <Link to={"/Home"}>
                <ButtonInput type={"button"} placeholder={"Login"} />
              </Link>
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
