import React from "react";
import RegisterFormRequired from "./components/RegisterFormRequired";
import ButtonInput from "../../components/ButtonInput";
import SignInPrompt from "./components/SignInPrompt";
function Register() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-green400">
      <div className="bg-white100 p-8 rounded-lg shadow-lg w-96">
        <div>
          <form>
            <div>
              <h2 className="text-4xl  mb-4 text-center font-pacifico ">
                Đăng ký
              </h2>
            </div>
            <div>
              <RegisterFormRequired />
            </div>
            <div>
              <ButtonInput type={"button"} placeholder={"Đăng Ký"} />
            </div>
            <div>
              <SignInPrompt />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
