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
        {/* Menü İkonu Yalnızca Mobilde Gösterilir */}
        <div className="md:hidden" onClick={toggleMenu}>
          <BiMenuAltRight className="text-3xl text-brown-primary" />
        </div>

        {/* Menü Öğeleri Yalnızca Desktopta Gösterilir */}
        <ul className="hidden md:flex md:flex-row items-center md:space-x-4 my-6 mr-20 text-brown-primary font-medium">
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

      {/* Drawer Menü Yalnızca Mobilde Gösterilir */}
      <div
        className={`fixed top-0 right-0 h-full bg-white w-64 z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-start p-8 text-brown-primary font-medium">
          <li className="py-3 px-2 hover:text-brown-primary"><a href="#products">Products</a></li>
          <li className="py-3 px-2 hover:text-brown-primary"><a href="#solutions">Solutions</a></li>
          <li className="py-3 px-2 hover:text-brown-primary"><a href="#pricing">Pricing</a></li>
          <li className="py-3 px-2 hover:text-brown-primary"><a href="#resources">Resources</a></li>
          <li className="py-3 px-2 hover:text-brown-primary"><a href="#login">Log In</a></li>
          <li className="border-2 border-brown-primary py-3 px-7 text-brown-primary rounded-lg hover:bg-brown-primary hover:text-white">
            Sign up now
          </li>
        </ul>
      </div>

      {/* Overlay Yalnızca Mobilde Gösterilir */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
