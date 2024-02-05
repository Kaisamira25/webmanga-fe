import MenuLine from '../assets/icons/FluentMdl2BulletedListText'
function Header() {
  return (
    <div className='h-16 max-h-16 bg-wrapper200'>
        <nav className='h-full px-5 flex justify-between items-center'>
          <span>Lainovo</span>
          <div>
            <MenuLine/>
          </div>
          {/* <div>
            <ul className='flex'>
              <li>Home</li>
              <li>Publications</li>
              <li>About us</li>
              <li>Contact</li>
            </ul>
          </div> */}
        </nav>
    </div>
  );
}

export default Header;
