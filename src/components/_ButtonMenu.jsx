import { useState } from 'react';
import MenuHamburger from '../assets/icons/FluentMdl2GlobalNavButton'
function ButtonMenu() {
    const [isOpen,setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    }
    return ( 
        <button className={isOpen ? 'transition duration-300 rotate-180' : "transition duration-300 -rotate-180"} onClick={handleOpen}>
            <MenuHamburger/>
        </button>
     );
}

export default ButtonMenu;