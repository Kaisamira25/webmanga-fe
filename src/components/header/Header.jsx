import style from "./scss/Header.module.scss";
import BtnCart from "./BtnCart";
import { useEffect, useState } from "react";
import Home from "../../assets/icons/HomeIcon";
import Cart from "../../assets/icons/CartIcon";
import Account from "../../assets/icons/User";
import Arrow from "../../assets/icons/ArrowDown";
import { useNavigate } from "react-router";
import { jwtDecode } from "jwt-decode";
import { logoutApi } from "../../services/Service";
function Header() {
  const [logout, setLogout] = useState(true);
  const [customerName, setCustomerName] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const checkLogin = () => {
      const customerRole = sessionStorage.getItem("role");
      if (customerRole) {
        const customerName = jwtDecode(sessionStorage.getItem("accessToken"));
        setCustomerName(customerName.customerName);
      }
      if (customerRole == "CUSTOMER") {
        setLogout(false);
      }
    };
    checkLogin();
  }, []);
  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogout = async () => {
    const response = await logoutApi();
    console.log(response);
    sessionStorage.removeItem("role");
    setCustomerName("");
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
    navigate("/aboutus");
  };
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
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
            <li onClick={handleNavigateToAboutUs}>Contact</li>
          </ul>
        </div>
        <div>
          <span onClick={handleNavigateToUser}>{customerName}</span>
          <div>
            {logout ? (
              <ul>
                <li onClick={handleLogin}>Login</li>
              </ul>
            ) : (
              <ul>
                <li onClick={handleLogout}>Logout</li>
              </ul>
            )}
            <button
              onClick={handleOpenMenu}
              className={openMenu ? `${style.openMenu}` : ""}
            >
              <Arrow />
            </button>
          </div>
        </div>
        <div className={openMenu ? `${style.buttonInSmSize}` : ""}>
          <div>
            <button onClick={handleNavigateToHome}>
              <Home />
            </button>
            <button onClick={handleNavigateToCart}>
              <Cart />
            </button>
            <button onClick={handleNavigateToUser}>
              <Account />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
