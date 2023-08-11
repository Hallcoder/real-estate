import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-12 text-3xl mt-40 text-white">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center">
          <h3 className="text-3xl font-semibold mb-2">Quick Links</h3>
          <ul className="list-none">
          <li className='font-[300] text-[0.8em]'><Link to="/" className="hover:text-gray-400">Home</Link></li>
            <li className='font-[300] text-[0.8em]'><Link to="/about" className="hover:text-gray-400">About Us</Link></li>
            <li className='font-[300] text-[0.8em]'><Link to="/services" className="hover:text-gray-400">Services</Link></li>
            <li className='font-[300] text-[0.8em]'><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center">
          <h3 className="text-3xl font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-400 mb-2">123 Main Street</p>
          <p className="text-gray-400">Email: info@example.com</p>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center">
          <h3 className="text-3xl font-semibold mb-2">Popular Locations</h3>
          <ul className="list-none">
            <li className='font-[300] text-[0.8em]'><Link to="#" className="hover:text-gray-400">Rusororo</Link></li>
            <li className='font-[300] text-[0.8em]'><Link to="#" className="hover:text-gray-400">Kagugu</Link></li>
            <li className='font-[300] text-[0.8em]'><Link to="#" className="hover:text-gray-400">Masoro</Link></li>
            <li className='font-[300] text-[0.8em]'><Link to="#" className="hover:text-gray-400">Gacuriro</Link></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0 text-center">
          <h3 className="text-3xl font-semibold mb-2">Popular Categories</h3>
          <ul className="list-none">
            <li className='font-[300] text-[0.8em]'><Link to="#" className="hover:text-gray-400">Houses</Link></li>
            <li className='font-[300] text-[0.8em]'><Link to="#" className="hover:text-gray-400">Apartments</Link></li>
            <li className='font-[300] text-[0.8em]'><Link to="#" className="hover:text-gray-400">Condos</Link></li>
            <li className='font-[300] text-[0.8em]'><Link to="#" className="hover:text-gray-400">Land</Link></li>
          </ul>
        </div>
      </div>
      <hr className="my-6 border-gray-700" />
      <div className="text-center text-sm">
        <p>&copy; 2023 Dream Homes Rwanda Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
