import BtnHeader from "./BtnDemo";
import CharmHome from "../assets/icons/CharmHome";
import IconBooks from '../assets/icons/MaterialSymbolsBook2Outline'
import WebHook from "../assets/icons/IcBaselineWebhook";
import AccountCircle from "../assets/icons/MaterialSymbolsAccountCircleFull";
import ShoppingCart from "../assets/icons/MaterialSymbolsShoppingCartOutlineRounded";
function HeaderDemo() {
  return (
    <header className="bg-gradient-to-r from-[#DCEFE5] to-[#c1e7d7]  text-center p-5 h-24 relative">
      <span className="flex justify-center items-center space-x-2 text-2xl text-green400">
        <WebHook />
        <p>LAINOVO</p>
      </span>
      {/* flex justify-center space-x-8 absolute left-1/2 -translate-x-1/2 translate-y-1/2 */}
      <div
        className="flex justify-center space-x-8 absolute left-1/2 -translate-x-1/2 translate-y-1/2
      md:space-x-28 lg:space-x-44"
      >
        <BtnHeader iconName={<CharmHome />} />
        <BtnHeader iconName={<IconBooks/>} />
        <BtnHeader iconName={<ShoppingCart />} />
        <BtnHeader iconName={<AccountCircle />} />
      </div>
    </header>
  );
}

export default HeaderDemo;
