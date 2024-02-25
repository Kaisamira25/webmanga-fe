import ForgotyourPasswordconfirm from "./apps/Forgotyourpassword/Forgotyourpasswordconfirm";
import Login from './apps/Login/Login'
import ForgotYourPassword from "./apps/Forgotyourpassword/ForgotyourPasswordrequired";
import REGIS from "./apps/resgister/Resgitster";
import OTP from "./apps/OTP/OTP"
function Views() {
  return (
    <div className="bg-gradient-to-r from-[#DCEFE5] to-[#b7e9d3] h-screen">

      <Login />
      <REGIS />
      <ForgotYourPassword />
      <OTP />
      <ForgotyourPasswordconfirm />
    </div>
  );
}

export default Views;