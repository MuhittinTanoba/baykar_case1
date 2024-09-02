import React, { useState } from 'react';
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white overflow-x-hidden">
      <div className="flex justify-between items-center px-8 ml-8 py-4">
        <div className="text-3xl font-bold text-brown-primary">Collers</div>
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <BiMenuAltRight className="text-3xl text-brown-primary " /> : <BiMenuAltRight className="text-3xl text-brown-primary" />}
        </div>
        <ul className={`flex flex-col md:flex-row items-center md:space-x-4 my-6 mr-20 text-brown-primary font-medium absolute md:static bg-white w-full md:w-auto md:mt-0 transition-transform duration-300 ease-in-out ${isOpen ? 'top-16 left-0' : 'top-[-500px] left-0'}`}>
          <li><a href="#products" className="py-3 px-2 hover:text-brown-primary">Products</a></li>
          <li><a href="#solutions" className="py-3 px-2 hover:text-brown-primary">Solutions</a></li>
          <li><a href="#pricing" className="py-3 px-2 hover:text-brown-primary">Pricing</a></li>
          <li><a href="#resources" className="py-3 px-2 hover:text-brown-primary">Resources</a></li>
          <li><a href="#login" className="py-3 px-2 hover:text-brown-primary">Log In</a></li>
          <li className="border-2 border-brown-primary py-3 px-7 text-brown-primary rounded-lg hover:bg-brown-primary hover:text-white">
            Sign up now
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
