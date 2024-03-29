import style from "./scss/Header.module.scss";
import BtnCart from "./BtnCart";

import { useEffect, useState } from "react";
import BtnAuth from "./BtnAuth";
import BtnUser from "./BtnUser";
import BtnLogout from "./BtnLogout";
import { useNavigate } from "react-router";
function Header() {
  const [logout, setLogout] = useState(false);
  const [visible, setVisible] = useState("");
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  }
  const handleLogout = () => {
    navigateToLogin();
    setLogout(!logout);
    setVisible(logout ? "visible" : "");
  };
  const handleNavigateToHome = () => {
    navigate("/home")
  }
  const handleNavigateToCart = () => {
    navigate("/cart")
  }
  const handleNavigateToUser = () => {
    navigate("/user")
  }
  return (
    <header>
      <div>
        <a onClick={handleNavigateToHome}>
          <p>LAINOVO</p>
        </a>
      </div>
      <div>
        <a onClick={handleNavigateToCart}>
          <BtnCart />
        </a>
        <div>
          <a onClick={handleNavigateToUser}>
            <BtnUser />
          </a>
          <div>
            <BtnAuth handleLogin={handleLogout} />
          </div>
          <div className={style[visible]}>
            <BtnLogout handleLogout={handleLogout} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
