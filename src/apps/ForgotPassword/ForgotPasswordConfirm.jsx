import React from "react";

import ButtonInput from "../../components/BtnInput";
import PasswordRequired from "./Components/PasswordRequired";
import { Link } from "react-router-dom";

function ForgotPasswordConfirm() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-green400">
      <div className="bg-white100 p-8 rounded-lg shadow-lg w-96">
        <div>
          <form>
            <div>
              <h2 className="text-4xl font-pacifico mb-4 text-center ">
              Forgot your password ?
              </h2>
            </div>
            <div>
              <p className=" text-xs mb-1"> </p>
            </div>
            <div>
              <PasswordRequired />
            </div>
            <div>
              <Link to={"/Login"}>
              <ButtonInput type={"button"} placeholder={"Continue"} />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default ForgotPasswordConfirm;
