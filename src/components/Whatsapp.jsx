import React, { useState } from 'react';
import Menu from './Menu';
import Logo from './photos/logo.png';
import WhatsAppPopup from './WhatsAppPopup';
import { FloatingWhatsApp } from 'react-floating-whatsapp'; // Import FloatingWhatsApp component

function WhatsApp() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleWhatsAppIconClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleNumberSubmit = (number) => {
    setWhatsappNumber(number);
    setShowPopup(false);
  };

  return (
    <div>
      <nav className="bg-green-400">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 border-b border-solid border-slate-600">
          <div
            className="flex-shrink-0 font-bold tracking-wider cursor-pointer"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <img
              src={Logo}
              alt="Peace care life center"
              className={`h-8 w-auto transform transition-transform duration-300 ${
                isHovering ? 'scale-110' : 'scale-100'
              }`}
            />
          </div>
          <div className="hidden md:block">
            <Menu />
          </div>
          <button
            type="button"
            className="md:hidden bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              onClick={handleWhatsAppIconClick}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="md:hidden">
          {showMobileMenu && <Menu />}
        </div>
      </nav>
      {showPopup && (
        <WhatsAppPopup
          onClose={handleClosePopup}
          onSubmit={handleNumberSubmit}
        />
      )}
      {whatsappNumber && (
        <div className="bg-green-100 p-4 mt-4">
          WhatsApp Number: {whatsappNumber}
        </div>
      )}
      <FloatingWhatsApp phoneNumber="9894404496" message="Hello!" /> {/* Add FloatingWhatsApp component */}
    </div>
  );
}

export default WhatsApp;


