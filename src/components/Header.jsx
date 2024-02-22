import LogoIcon from "../assets/icons/LogoIcon";
import BtnHeader from "./BtnHeader";
import IconHome from "../assets/icons/HomeIcon";
import IconBook from '../assets/icons/BookIcon'
import IconCart from '../assets/icons/CartIcon'
import IconUser from '../assets/icons/AccountIcon'
function Header() {
  const btnList = [
    { id: 1, iconName: <IconHome /> },
    { id: 2, iconName: <IconBook /> },
    { id: 3, iconName: <IconCart /> },
    { id: 4, iconName: <IconUser /> },
  ];
  return (
    <header className="h-24 bg-white100 text-center text-2xl flex justify-center items-center relative">
      <a className="flex items-center" href="/">
        <LogoIcon />
        LAINOVO
      </a>
      <div className="absolute -bottom-6 flex gap-10">
        {btnList.map((iconName, index) => (
          <BtnHeader btnIcon={iconName.iconName} key={index} />
        ))}
      </div>
    </header>
  );
}

export default Header;
