import style from "./scss/Header.module.scss";
import IconHome from "../../assets/icons/HomeIcon";
import IconCart from "../../assets/icons/CartIcon";
import IconMenu from "../../assets/icons/Menu";
import IconUser from "../../assets/icons/User";
import IconLogout from "../../assets/icons/Login";
import BtnHeader from "./BtnCart";

import { useState } from "react";
import { Link } from "react-router-dom";
import BtnAuth from "./BtnAuth";
import BtnUser from "./BtnUser";
import BtnLogout from "./BtnLogout";
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
        <Link>
          <p>LAINOVO</p>
        </Link>
      </div>
      <div>
        <Link>
          <BtnUser icon={<IconUser />} logoutIcon={<IconLogout />} />
        </Link>
        <Link>
          <BtnLogout icon={<IconLogout />} />
        </Link>
        <Link to={"Cart"}>
          <BtnHeader icon={<IconCart />} />
        </Link>
      </div>
      <div>
        <Link>
          <BtnAuth />
        </Link>
      </div>
    </header>
  );
}

export default Header;
