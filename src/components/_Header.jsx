import { useState } from 'react';
import MenuHamburger from '../assets/icons/FluentMdl2GlobalNavButton'
import ButtonMenu from './_ButtonMenu';
function Header() {
  return (
    <header className='bg-red-400 w-full h-20'>
      <nav className='bg-gray-400 flex justify-between px-10 h-full items-center'>
        <a className='' href="/">Lainovo</a>
        <ul className='invisible flex md:visible'>
          <li>Home</li>
          <li>Publications</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
        <ButtonMenu/> 
      </nav>
    </header>
  );
}

export default Header;
