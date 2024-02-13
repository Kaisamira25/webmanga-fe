import { useState } from 'react';
import SymbolsView from '../assets/icons/MaterialSymbolsViewComfyAlt'
import SymbolsViewOutLine from '../assets/icons/MaterialSymbolsViewComfyAltOutline'
function MenuBtn() {
    const [isOpen,setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    }
    return ( 
        <button className={`md:hidden transition duration-500 md:invisible ${isOpen ? 'rotate-180' : "-rotate-180"}`} onClick={handleOpen}>
            {isOpen ? <SymbolsViewOutLine/> : <SymbolsView/>}
        </button>
     );
}

export default MenuBtn;