import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import logo from "./images/logo_2.jpg";


const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center h-16 shadow-lg z-50 px-6 sticky top-0 bg-white">
       
        <img src={logo} alt="PEACE_LIFE_LOGO" className="w-32 h-14"/>
         
        <button
          className="block md:hidden text-xl"
          onClick={() => setMobile(!mobile)}
          aria-label="Toggle menu"
        >
          {mobile ? <ImCross className="text-sm" /> : <FaBars className="text-2xl" />}
        </button>
        <ul
          className={`${
            mobile ? "block" : "hidden"
          } absolute md:static bg-white md:bg-transparent md:flex md:items-center top-16 left-0 w-full md:w-auto transition-all duration-500 ease-in-out z-50`}
          onClick={() => setMobile(false)}
        >
          <Link to="/" className="text-2xl block md:inline-block px-4 py-2 md:px-2 lg:px-4 text-gray-900 hover:text-green-500 hover:underline transform transition duration-300">
            <li className="p-3 text-center">HOME</li>
          </Link>
          <Link to="/AboutPage" className="text-2xl block md:inline-block px-4 py-2 md:px-2 lg:px-4 text-gray-900 hover:text-green-500 hover:underline transform transition duration-300">
            <li className="p-3 text-center">ABOUT US</li>
          </Link>
          <Link to="/ServicePage" className="text-2xl block md:inline-block px-4 py-2 md:px-2 lg:px-4 text-gray-900 hover:text-green-500 hover:underline transform transition duration-300">
            <li className="p-3 text-center">SERVICES</li>
          </Link>
          <Link to="/GalleryPage" className="text-2xl block md:inline-block px-4 py-2 md:px-2 lg:px-4 text-gray-900 hover:text-green-500 hover:underline transform transition duration-300">
            <li className="p-3 text-center">GALLERY</li>
          </Link>
          <Link to="/ContactPage" className="text-2xl block md:inline-block px-4 py-2 md:px-2 lg:px-4 text-gray-900 hover:text-green-500 hover:underline transform transition duration-300">
            <li className="p-3 text-center">CONTACT US</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;


