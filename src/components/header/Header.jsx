import style from "./scss/Header.module.scss";
import IconHome from "../../assets/icons/HomeIcon";
import IconCart from "../../assets/icons/CartIcon";
import IconMenu from "../../assets/icons/Menu";
import IconUser from "../../assets/icons/User";
import IconLogout from "../../assets/icons/Login";
import BtnHeader from "./BtnHeader";
import { useState } from "react";
function Header() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  // const btnHeaderList = [
  //   { icon: <IconHome />, path:"/Home" },
  //   { icon: <IconBook /> },
  //   { icon: <IconCart /> },
  //   { icon: <IconUser />, path: "/UserPage" },
  // ];

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
    <header>
      <div>
        <div className={style.brandName}>
          <a href="/">
            <p>LAINOVO</p>
          </a>
        </div>
        <div className={`${style.link} ${open ? `${style.linkSlide}` : ""}`}>
          <a href="/">
            {/* <IconHome /> */}
            <p>Home</p>
          </a>
          <a href="/">
            {/* <IconCart /> */}
            <p>Cart</p>
          </a>
          <a href="/">
            {/* <IconUser /> */}
            <p>Account</p>
          </a>
          <a href="/">
            {/* <IconLogout /> */}
            <p>Login</p>
          </a>
        </div>
        <div className={style.buttonHeader}>
          <BtnHeader onOpen={handleOpen} icon={<IconMenu />} />
        </div>
      </div>
    </header>
  );
}

export default Header;
