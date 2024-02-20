import LogoIcon from "../assets/icons/IcBaselineWebhook";
import BtnHeader from "./BtnHeader";
import IconHome from "../assets/icons/CharmHome";
import IconBook from '../assets/icons/MaterialSymbolsBook2Outline'
import IconCart from '../assets/icons/MaterialSymbolsShoppingCartOutlineRounded'
import IconUser from '../assets/icons/MaterialSymbolsAccountCircleFull'
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
      <div className="absolute -bottom-4 flex gap-10">
        {btnList.map((iconName, index) => (
          <BtnHeader btnIcon={iconName.iconName} key={index} />
        ))}
      </div>
    </header>
  );
}

export default Header;
