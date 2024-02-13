import { useState } from 'react';
import MenuHamburger from '../assets/icons/FluentMdl2GlobalNavButton'
import ButtonMenu from './_MenuBtn';
import MenuBtn from './_MenuBtn';
import UserBtn from './_UserBtn';
function Header() {
  return (
    <header className='bg-red-400 w-full h-20'>
      <nav className='bg-white100 h-full flex justify-between px-10 items-center lg:px-20'>
        <a href="/">Lainovo</a>
        <ul className='invisible flex md:visible space-x-7 flex-grow justify-center'>
          <li className='font-semibold'>Home</li>
          <li>Publications</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
        <MenuBtn/>
        <UserBtn/>
      </nav>
    </header>
  );
}

export default Header;
