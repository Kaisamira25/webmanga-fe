import React from "react";
import RegisterFormRequired from "./Components/RegisterFormRequired";
import ButtonInput from "../../components/BtnInput";
import SignInPrompt from "./Components/SignInPrompt";
import { Link } from "react-router-dom";
function Register() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-green400">
      <div className="bg-white100 p-8 rounded-lg shadow-lg md:w-96 w-96">
        <div>
          <form>
            <div>
              <h2 className="text-4xl  mb-4 text-center font-pacifico ">
              Resgister
              </h2>
            </div>
            <div>
              <RegisterFormRequired />
            </div>
            <div>
              <Link to={"/Otp"}>
              <ButtonInput type={"button"} placeholder={"Resgister"}  />
              </Link>
            
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
