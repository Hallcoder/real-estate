import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const pathname  = location.pathname.split('/')[1];
  const AClass = "hover:font-bold h-11/12 w-20  justify-center items-center flex  hover:cursor-pointer hover:border-b hover:border-[#D9C8B8] transition-all"
  const activeClass = " bg-orange-500 text-white p-3 text-xs font-semibold"
  return <nav className="flex border justify-between h-10 sticky top-0 bg-white z-10">
        <div className="text-center border flex justify-center w-full">
          <ul className="list-none flex justify-evenly w-4/12 items-center h-full">
           <Link to='/' className={pathname == '' ? AClass+activeClass:AClass}>Homes</Link>
           <Link to='/rent' className={pathname == 'rent' ? AClass+activeClass:AClass}>Rent</Link>
           <Link to='/buy' className={pathname == 'buy' ? AClass+activeClass:AClass}>Buy</Link>
           <Link to='/about' className={pathname == 'about' ? AClass+activeClass:AClass}>About us</Link>
           <Link to='/contact' className={pathname == 'contact' ? AClass+activeClass:AClass}>Contact</Link>
          </ul>
        </div>
  </nav>;
}

export default Header;
