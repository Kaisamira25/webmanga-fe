import style from "./scss/Header.module.scss";
import IconHome from "../../assets/icons/HomeIcon";
import IconCart from "../../assets/icons/CartIcon";
import IconUser from "../../assets/icons/User";
import IconLogout from "../../assets/icons/Login";
function Header() {
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
      <p>LAINOVO</p>
      <div>
        <div>
          <IconHome />
          <a href="/">Home</a>
        </div>
        <div>
          <IconCart />
          <a href="/">Cart</a>
        </div>
        <div>
          <IconUser />
          <a href="/">Account</a>
        </div>
        <div>
          <IconLogout />
          <a href="/">Login</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
