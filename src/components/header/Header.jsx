import style from "./scss/Header.module.scss";
import IconHome from "../../assets/icons/HomeIcon";
import IconCart from "../../assets/icons/CartIcon";
import IconMenu from "../../assets/icons/Menu";
import IconUser from "../../assets/icons/User";
import IconLogout from "../../assets/icons/Login";
import BtnHeader from "./BtnHeader";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [open, setOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const handleOpen = () => {
    setOpen(!open);
  };
  // const btnHeaderList = [
  //   { icon: <IconHome />, path:"/Home" },
  //   { icon: <IconBook /> },
  //   { icon: <IconCart /> },
  //   { icon: <IconUser />, path: "/UserPage" },
  // ];

  const storedCartItemCount = localStorage.getItem("cartItemCount");

  useEffect(() => {
    if (storedCartItemCount !== null) {
      setCartItemCount(parseInt(storedCartItemCount));
    }
  }, [storedCartItemCount]);

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedCartItemCount = localStorage.getItem("cartItemCount");
      if (updatedCartItemCount !== null) {
        setCartItemCount(parseInt(updatedCartItemCount));
      }
    };

    window.addEventListener("cartItemCount", handleStorageChange);

    return () => {
      window.removeEventListener("cartItemCount", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsFixed(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          <Link to={"/Cart"} className={style.cartLink}>
            {/* <IconCart /> */}
            <p>Cart</p>
            {cartItemCount > 0 && (
              <span className={style.cartCount}>{cartItemCount}</span>
            )}
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
