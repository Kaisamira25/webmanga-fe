import { useState } from 'react';
import MenuLine from '../assets/icons/FluentMdl2BulletedListText'
function Header() {
  const [open,setOpen] = useState(false);
  const [transition, setTransition] = useState("");

  const navbarList = [
    "TRANG CHỦ","ẤN PHẨM","THÔNG TIN","LIÊN HỆ"
  ];
  const handleMenuClick = () => {
    setOpen(!open);
    setTransition("transition-all transform-origin-center rotate-180");
  };

  console.log(open);

  return (
    <div className='h-16 max-h-16 bg-wrapper200'>
        <nav className="h-full px-10 flex items-center justify-between md:px-28">
          <div className='flex-grow-0'>
            <span>
              <a className='font-Confortaa font-bold text-2xl' href="#">Lainovo</a>
            </span>
          </div>
          <div className='md:hidden'>
            <button 
            className={transition}
            onClick={handleMenuClick}>
              <MenuLine/>
            </button>
          </div>
          <div className="hidden md:block md:flex-grow">
            <ul className='flex justify-center space-x-10'>
              {navbarList.map((item,index) => (<li key={index} className={index === 0 ? 'font-Mulish font-bold' : 'font-Mulish font-semibold'}>{item}</li>))}
            </ul>
          </div>
        </nav>
    </div>
  );
}

export default Header;
