import React from "react";
import RegisterPrompt from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
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
