import Login from "./apps/Login/Login";
import REGIS from "./apps/resgister/Resgitster";

function Views() {
    return ( 
        <div className="bg-gradient-to-r from-[#DCEFE5] to-[#b7e9d3] h-screen">
          {/* <REGIS/> */}
          <Login/>
        </div>
     );
}

export default Views;