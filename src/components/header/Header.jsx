import IconHome from "../../assets/icons/HomeIcon";
import IconBook from "../../assets/icons/BookIcon";
import IconCart from "../../assets/icons/CartIcon";
import IconUser from "../../assets/icons/AccountIcon";
import style from "./scss/Header.module.scss";
import BtnHeader from "./BtnHeader";
import { Link } from "react-router-dom";

function Header() {
  const btnHeaderList = [
    { icon: <IconHome />, path: "/Home" },
    { icon: <IconBook /> },
    { icon: <IconCart />, path: "/Cart" },
    { icon: <IconUser />, path: "/UserPage" },
  ];
  return (
    <header className={style.header}>
      <p>LAINOVO</p>
      <div className={style.btnWrapper}>
        {btnHeaderList.map((i, index) => (
          <Link to={i.path}>
            <BtnHeader key={index} btnIcon={i.icon} />
          </Link>
        ))}
      </div>
    </header>
  );
}

export default Header;
