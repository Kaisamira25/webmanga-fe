import React from "react";
import EmailRequired from "./components/EmailRequired";
import ButtonInput from "../../components/BtnInput";
import { Link, useNavigate } from "react-router-dom";

function ForgotPasswordRequired() {
  const navigate = useNavigate();

  const handleForgotPassword = () => {
    navigate("/Otp", { state: { from: "/ForgotPassword" } });
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-green400">
      <div className="bg-white100 p-8 rounded-lg shadow-lg  md:w-96 w-96">
        <table>
          <div>
            <h3 className="text-xl font-pacifico mb-4 text-center ">
              Forgot Your Password ?
            </h3>
          </div>
          <div>
            <p className=" text-xs mb-1">
              Enter your email so we can send you a link to re-enter your
              password.
            </p>
          </div>
          <div>
            <EmailRequired />
          </div>
          <div className="flex gap-4 ">
            <div className="flex-1 ml-2">
              <Link to={"/Login"}>
                <ButtonInput type={"button"} placeholder={"Cancel "} />
              </Link>
            </div>
            <div className="flex-1 mr-2">
              <ButtonInput
                type={"button"}
                placeholder={"Continue"}
                onClick={handleForgotPassword}
              />
            </div>
          </div>
        </table>
      </div>
    </div>
  );
}
export default ForgotPasswordRequired;
