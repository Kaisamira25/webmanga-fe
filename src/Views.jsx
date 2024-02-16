import HeaderDemo from "./components/Header";
import Header from "./components/_Header";
import Search from "./components/_Search";
import SideBar from "./components/_Sidebar";
import Footer from './components/_Footer'
import HomePage from "./apps/Home/Home";

function Views() {
    return ( 
        <div className="bg-gradient-to-r from-[#DCEFE5] to-[#b7e9d3] h-screen">
            <HomePage/>
        </div>
     );
}

export default Views;