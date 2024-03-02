import HeaderDemo from "./components/Header";
import Header from "./components/_Header";
import Search from "./components/_Search";
import SideBar from "./components/_Sidebar";
import Footer from './components/_Footer'
import HomeAdmin from "./apps/Admin/AdminPage";
import { BrowserRouter } from "react-router-dom";

function Views() {

    return (
        <BrowserRouter>
            <HomeAdmin />
        </BrowserRouter>
    );
}

export default Views;