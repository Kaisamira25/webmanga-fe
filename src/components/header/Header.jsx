import IconHome from "../../assets/icons/HomeIcon";
import IconBook from "../../assets/icons/BookIcon";
import IconCart from "../../assets/icons/CartIcon";
import IconUser from "../../assets/icons/AccountIcon";
import style from "./scss/Header.module.scss";
import BtnHeader from "./BtnHeader";

function Header() {
  const btnHeaderList = [
    { icon: <IconHome /> },
    { icon: <IconBook /> },
    { icon: <IconCart /> },
    { icon: <IconUser /> },
  ];
  return (
    <header className={style.header}>
      <p>LAINOVO</p>
      <div className={style.btnWrapper}>
        {btnHeaderList.map((i,index) => (
          <BtnHeader key={index} btnIcon={i.icon}/>
        ))}
      </div>
    </header>
  );
}

export default Header;
