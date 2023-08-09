import { Link } from "react-router-dom";

function Header() {
  const AClass = "hover:font-bold hover:cursor-pointer hover:border-b hover:border-[#D9C8B8] transition-all"
  return <nav className="flex border justify-between h-16">
        <div className="text-center border w-10/12">
          <ul className="list-none flex justify-evenly w-4/12 items-center h-full">
            <a><Link to='/' className={AClass}>Homes</Link></a>
            <a><Link to='/rent' className={AClass}>Rent</Link></a>
            <a><Link to='/buy' className={AClass}>Buy</Link></a>
            <a><Link to='/about' className={AClass}>About us</Link></a>
            <a><Link to='/contact' className={AClass}>Contact</Link></a>
          </ul>
        </div>
  </nav>;
}

export default Header;
