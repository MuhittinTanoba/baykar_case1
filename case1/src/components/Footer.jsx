import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-5 md:px-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* First Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Column 1</h3>
            <ul>
              <li className="mb-2"><a href="#">Link 1</a></li>
              <li className="mb-2"><a href="#">Link 2</a></li>
              <li className="mb-2"><a href="#">Link 3</a></li>
              <li className="mb-2"><a href="#">Link 4</a></li>
              <li className="mb-2"><a href="#">Link 5</a></li>
              <li className="mb-2"><a href="#">Link 6</a></li>
            </ul>
          </div>
          {/* Second Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Column 2</h3>
            <ul>
              <li className="mb-2"><a href="#">Link 1</a></li>
              <li className="mb-2"><a href="#">Link 2</a></li>
              <li className="mb-2"><a href="#">Link 3</a></li>
              <li className="mb-2"><a href="#">Link 4</a></li>
              <li className="mb-2"><a href="#">Link 5</a></li>
              <li className="mb-2"><a href="#">Link 6</a></li>
            </ul>
          </div>
          {/* Third Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Column 3</h3>
            <ul>
              <li className="mb-2"><a href="#">Link 1</a></li>
              <li className="mb-2"><a href="#">Link 2</a></li>
              <li className="mb-2"><a href="#">Link 3</a></li>
              <li className="mb-2"><a href="#">Link 4</a></li>
              <li className="mb-2"><a href="#">Link 5</a></li>
              <li className="mb-2"><a href="#">Link 6</a></li>
            </ul>
          </div>
          {/* Fourth Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get the App</h3>
            <div className="flex mb-4">
              <img src="appstore.png" alt="App Store" className="w-24 h-8 mr-4"/>
              <img src="googleplay.png" alt="Google Play" className="w-24 h-8"/>
            </div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#"><img src="facebook-icon.png" alt="Facebook" className="w-6 h-6"/></a>
              <a href="#"><img src="twitter-icon.png" alt="Twitter" className="w-6 h-6"/></a>
              <a href="#"><img src="instagram-icon.png" alt="Instagram" className="w-6 h-6"/></a>
              <a href="#"><img src="linkedin-icon.png" alt="LinkedIn" className="w-6 h-6"/></a>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-700"/>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm">Terms</a>
            <a href="#" className="text-sm">Privacy</a>
            <a href="#" className="text-sm">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
