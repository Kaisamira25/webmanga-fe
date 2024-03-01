import CartPage from "./apps/Cart/CartPage";
import Home from "./apps/Home/Home";
import PopularView from "./apps/Home/component/PopularView";
import Quantity from "./components/Quantity";
import LoginPage from "./pages/Login/LoginPage"
import RegisterPage from "./pages/Register/RegisterPage"
function Views() {
    return ( 
        <div>
            {/* <Home/> */}
            <CartPage/> 
            {/* <LoginPage/> */}
            {/* <RegisterPage/> */}
            {/* <PopularView/> */}
            {/* <Quantity type={'number'}/> */}
        </div>
     );
}

export default Views;