import MenuLine from '../assets/icons/FluentMdl2BulletedListText'
function Header() {
  return (
    <div className="w-full h-36">
      <header className='px-10 h-full'>
        <nav className='w-full h-full grid grid-cols-2 md:grid-cols-3 content-center'>
          <div className='col-span-1'>FuckThisGroup</div>
          <div className='col-span-1 grid justify-items-end'><MenuLine/></div>
          <div className='hidden  md:block md:col-span-1'>Demo3</div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
