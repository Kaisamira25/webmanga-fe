import style from "./scss/Header.module.scss";
import IconHome from "../../assets/icons/HomeIcon";
import IconCart from "../../assets/icons/CartIcon";
import IconMenu from "../../assets/icons/Menu";
import IconUser from "../../assets/icons/User";
import IconLogout from "../../assets/icons/Login";
import BtnHeader from "./BtnHeader";

import { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [open, setOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  // const btnHeaderList = [
  //   { icon: <IconHome />, path:"/Home" },
  //   { icon: <IconBook /> },
  //   { icon: <IconCart /> },
  //   { icon: <IconUser />, path: "/UserPage" },
  // ];
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  });
  return (
    // <header className={style.header}>
    //   <p>LAINOVO</p>
    //   <div className={style.btnWrapper}>
    //     {btnHeaderList.map((i,index) => (
    //       <Link to={i.path}>
    //         <BtnHeader key={index} btnIcon={i.icon}/>
    //       </Link>
    //     ))}
    //   </div>
    // </header>

    // <header>
    //   <p>LAINOVO</p>
    //   <BtnHeader/>
    // </header>
    <header
      className={isFixed ? `${style.header} ${style.fixed}` : style.header}
    >
      <div>
        <div className={style.brandName}>
          <Link to={"/Home"}>
            <p>LAINOVO</p>
          </Link>
        </div>
        <div className={`${style.link} ${open ? `${style.linkSlide}` : ""}`}>
          <Link to={"/Home"}>
            {/* <IconHome /> */}
            <p>Home</p>
          </Link>
          <Link to={"/Cart"}>
            {/* <IconCart /> */}
            <p>Cart</p>
          </Link>
          <Link to={"/User"}>
            {/* <IconUser /> */}
            <p>Account</p>
          </Link>
          <Link to={"/Login"}>
            {/* <IconLogout /> */}
            <p>Login</p>
          </Link>
        </div>
        <div className={style.buttonHeader}>
          <BtnHeader onOpen={handleOpen} icon={<IconMenu />} />
        </div>
      </div>
    </header>
  );
}

export default Header;
