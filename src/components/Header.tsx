import { Link } from "react-router-dom";

function Header() {
  const AClass = "hover:font-bold h-11/12 items-center flex  hover:cursor-pointer hover:border-b hover:border-[#D9C8B8] transition-all"
  return <nav className="flex border justify-between h-16">
        <div className="text-center border flex justify-center w-full">
          <ul className="list-none flex justify-evenly w-4/12 items-center h-full">
           <Link to='/' className={AClass + " font-bold border-b-2 border-orange-500"}>Homes</Link>
           <Link to='/rent' className={AClass}>Rent</Link>
           <Link to='/buy' className={AClass}>Buy</Link>
           <Link to='/about' className={AClass}>About us</Link>
           <Link to='/contact' className={AClass}>Contact</Link>
          </ul>
        </div>
  </nav>;
}

export default Header;
