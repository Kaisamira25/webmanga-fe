import Footer from "./components/_Footer";
import Header from "./components/_Header";
import SideBar from "./components/_Sidebar";

function Views() {
    return ( 
        <div className="bg-background400 h-screen">
            <Header/>
            {/* <Footer/> */}
            <SideBar/>
        </div>
     );
}

export default Views;