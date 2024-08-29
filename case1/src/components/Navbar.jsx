import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 ml-8 bg-white">
      <div className="text-3xl my-8 font-bold text-brown-700">Collers</div>
      <ul className="flex space-x-4 my-6 mr-20 text-brown-700 font-medium">
        <li><a href="#products" className="py-3 px-2 hover:text-brown-500">Products</a></li>
        <li><a href="#solutions" className="py-3 px-2 hover:text-brown-500">Solutions</a></li>
        <li><a href="#pricing" className="py-3 px-2 hover:text-brown-500">Pricing</a></li>
        <li><a href="#resources" className="py-3 px-2 hover:text-brown-500">Resources</a></li>
        <li><a href="#login" className="py-3 px-2 hover:text-brown-500">Log In</a></li>
        <li className="border border-brown-700 py-3 px-7 text-brown-700 rounded-full hover:bg-brown-700 hover:text-white">
        Sign up now
      </li>
      </ul>

    </nav>
  );
};
    
export default Navbar;
