import style from "./scss/Header.module.scss";
import BtnCart from "./BtnCart";
import { useEffect, useState } from "react";
import BtnLogin from "./BtnAuth";
import BtnUser from "./BtnUser";
import BtnLogout from "./BtnLogout";
import { useNavigate } from "react-router";
import { jwtDecode } from "jwt-decode";
function Header() {
  const [logout, setLogout] = useState(true);
  // const [customerName, setCustomerName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const checkLogin = () => {
      const customerRole = sessionStorage.getItem("role");
      // const customerName = jwtDecode(sessionStorage.getItem("accessToken"));
      if (customerRole == "CUSTOMER") {
        // setCustomerName(customerName.customerName);
        setLogout(false);
      }
    };
    checkLogin();
  }, []);
  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    sessionStorage.removeItem("role");
    // setCustomerName("");
    setLogout(!logout);
  };
  const handleNavigateToHome = () => {
    navigate("/home");
  };
  const handleNavigateToCart = () => {
    navigate("/cart");
  };
  const handleNavigateToUser = () => {
    navigate("/user");
  };
  const handleNavigateToAboutUs = () => {
  }
  return (
    <header>
      <div>
        <div>
          <a onClick={handleNavigateToHome}>
            <p>LAINOVO</p>
          </a>
        </div>
        <div>
          <ul>
            <li onClick={handleNavigateToHome}>Home</li>
            <li onClick={handleNavigateToCart}>Cart</li>
            <li onClick={handleNavigateToAboutUs}>About</li>
          </ul>
        </div>
        <div>
          {logout ? <ul>
            <li onClick={handleLogin}>Login</li>
          </ul> : <ul>
            <li onClick={handleLogout}>Logout</li>
          </ul>}
        </div>
      </div>
    </header>
  );
}

export default Header;
