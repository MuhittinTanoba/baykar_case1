import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { CiGlobe } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-5 md:px-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
          {/* First Column */}
          <div>
            <h3 className="text-[16px] font-[500px] py-2 mb-4">Product</h3>
            <ul>
              <li className="mb-2 py-2"><a href="#">Pricing</a></li>
              <li className="mb-2 py-2"><a href="#">Overview</a></li>
              <li className="mb-2 py-2"><a href="#">Browse</a></li>
              <li className="mb-2 py-2"><a href="#">Accessibility</a></li>
              <li className="mb-2 py-2"><a href="#">Five</a></li>
            </ul>
          </div>
          {/* Second Column */}
          <div>
            <h3 className="text-[16px] font-[500px] py-2 mb-4">Solutions</h3>
            <ul>
              <li className="mb-2 py-2"><a href="#">Brainstorming</a></li>
              <li className="mb-2 py-2"><a href="#">Ideation</a></li>
              <li className="mb-2 py-2"><a href="#">Wireframing</a></li>
              <li className="mb-2 py-2"><a href="#">Research</a></li>
              <li className="mb-2 py-2"><a href="#">Design</a></li>
            </ul>
          </div>
          {/* Third Column */}
          <div>
            <h3 className="text-[16px] font-[500px] py-2 mb-4">Support</h3>
            <ul>
              <li className="mb-2 py-2"><a href="#">Contact Us</a></li>
              <li className="mb-2 py-2"><a href="#">Developers</a></li>
              <li className="mb-2 py-2"><a href="#">Documentation</a></li>
              <li className="mb-2 py-2"><a href="#">Integrations</a></li>
              <li className="mb-2 py-2"><a href="#">Reports</a></li>
            </ul>
          </div>
          {/* Fourth Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get the App</h3>
            <div className="mb-14 flex flex-col items-center md:items-start">
              <img
                src="./src/assets/img/footer/AppStore.png"
                alt="App Store"
                className="w-[120px] h-auto mr-4 mb-2"
              />
              <img
                src="./src/assets/img/footer/GooglePlay.png"
                alt="Google Play"
                className="w-[135px] h-auto"
              />
            </div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#"><FaYoutube className="w-6 h-6" /></a>
              <a href="#"><FaFacebookF className="w-6 h-6" /></a>
              <a href="#"><FaTwitter className="w-6 h-6" /></a>
              <a href="#"><FaInstagram className="w-6 h-6" /></a>
              <a href="#"><FaLinkedinIn className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-700" />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">Collers @2023. All rights reserved.</p>
          <div className="items-center space-x-1 mt-4">
            <a href="#" className="text-sm">Terms</a>
            <a href="#" className="text-sm">Privacy</a>
            <a href="#" className="text-sm">Contact</a>
            <div className="flex items-center justify-center">
              <a href="#"><CiGlobe className="w-6 h-6 mr-[10px]" /></a>
              <a href="#" className="text-sm">EN</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
