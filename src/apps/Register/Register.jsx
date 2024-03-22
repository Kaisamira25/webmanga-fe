import React from "react";
import { useNavigate } from "react-router-dom";
import RegisterFormRequired from "./components/RegisterFormRequired";
import SignInPrompt from "./components/SignInProm";
function Register() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center min-h-screen bg-green400">
      <div className="bg-white100 p-8 rounded-lg shadow-lg md:w-96 w-96">
        <div>
          <form>
            <div>
              <h2 className="text-4xl  mb-4 text-center font-pacifico ">
                Register
              </h2>
            </div>
            <div>
              <RegisterFormRequired />
            </div>

            <div className="mt-2">
              <SignInPrompt />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
