import Login from "./apps/Login/Login";
import REGIS from "./apps/resgister/Resgitster";
import OTP from "./apps/OTP/OTP"
import Forgotpassword from "./apps/Forgotyourpassword/Forgotyourpassword";
import Forgotpassword2 from "./apps/Forgotyourpassword/Forgotyourpassword2";
function Views() {
    return ( 
        <div className="bg-gradient-to-r from-[#DCEFE5] to-[#b7e9d3] h-screen">
          {/* <REGIS/> */}
         {/* <OTP/> */}
          {/* <Login/>  */}
          <Forgotpassword2/>

        </div>
     );
}

export default Views;