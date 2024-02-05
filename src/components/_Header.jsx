import MenuLine from '../assets/icons/FluentMdl2BulletedListText'
function Header() {
  return (
    <div className='h-16 max-h-16 bg-wrapper200'>
        <nav className="h-full px-5 flex items-center justify-between">
          <div className='flex-grow-0'>
            <span>
              <a className='font-Pacifico' href="#">Lainovo</a>
            </span>
          </div>
          <div className='md:hidden'>
            <button>
              <MenuLine/>
            </button>
          </div>
          <div className="hidden md:block md:flex-grow">
            <ul className='flex justify-center space-x-10'>
              <li className='font-Poppin'>Home</li>
              <li>Publications</li>
              <li>About us</li>
              <li>Contact</li>
            </ul>
          </div>
        </nav>
    </div>
  );
}

export default Header;
