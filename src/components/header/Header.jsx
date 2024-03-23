import style from "./scss/Header.module.scss";
import BtnCart from "./BtnCart";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BtnAuth from "./BtnAuth";
import BtnUser from "./BtnUser";
import BtnLogout from "./BtnLogout";
function Header() {
  const [logout, setLogout] = useState(false);
  const [visible, setVisible] = useState("");
  useEffect(() => {
    console.log(logout);
  }, [logout]);
  const handleLogout = () => {
    setLogout(!logout);
    setVisible(logout ? "visible" : "");
  };
  return (
    <header>
      <div>
        <Link to={"/Home"}>
          <p>LAINOVO</p>
        </Link>
      </div>
      <div>
        <Link to={"Cart"}>
          <BtnCart />
        </Link>
        <div>
          <Link to={"/User"}>
            <BtnUser />
          </Link>
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
