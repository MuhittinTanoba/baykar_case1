import React, { useState } from 'react';
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white">
      <div className="flex justify-between items-center px-8 ml-8 py-4">
        <div className="text-3xl font-bold text-brown-700">Collers</div>
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <BiMenuAltRight className="text-3xl text-brown-700 " /> : <BiMenuAltRight className="text-3xl text-brown-700" />}
        </div>
        <ul className={`flex flex-col md:flex-row items-center md:space-x-4 my-6 mr-20 text-brown-700 font-medium absolute md:static bg-white w-full md:w-auto md:mt-0 transition-transform duration-300 ease-in-out ${isOpen ? 'top-16 left-0' : 'top-[-500px] left-0'}`}>
          <li><a href="#products" className="py-3 px-2 hover:text-brown-500">Products</a></li>
          <li><a href="#solutions" className="py-3 px-2 hover:text-brown-500">Solutions</a></li>
          <li><a href="#pricing" className="py-3 px-2 hover:text-brown-500">Pricing</a></li>
          <li><a href="#resources" className="py-3 px-2 hover:text-brown-500">Resources</a></li>
          <li><a href="#login" className="py-3 px-2 hover:text-brown-500">Log In</a></li>
          <li className="border-2 border-brown-700 py-3 px-7 text-brown-700 rounded-lg hover:bg-brown-700 hover:text-white">
            Sign up now
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
