import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Install react-icons if not already

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-primary text-white p-4 flex justify-between items-center">
      <a href="#home" className="flex items-center ml-4 md:ml-12">
        <img 
          src={logo} 
          alt="AT DIGITAL Logo" 
          className="w-32 sm:w-24 md:w-40"  // Adjust size based on screen width
        />
      </a>

      {/* Hamburger Icon for Small Screens (only visible below 375px or custom screen size) */}
      <div className="sm:hidden mr-4" onClick={toggleMenu}>
        {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>

      {/* Navigation Links - Visible on screens 375px and above */}
      <nav className="hidden sm:flex">
        <ul className="flex space-x-4 mr-4 md:mr-12 text-xs">
          <li><a href="#services" className="text-base sm:text-sm">SERVICES</a></li>
          <li><a href="#about" className="text-base sm:text-sm">ABOUT US</a></li>
          <li><a href="#contact" className="text-base sm:text-sm">CONTACT US</a></li>
          <li><a href="#careers" className="text-base sm:text-sm">CAREERS</a></li>
        </ul>
      </nav>

      {/* Hamburger Menu - Only Visible Below 375px */}
      {isOpen && (
        <nav className="fixed top-0 right-0 w-3/4 h-full bg-white text-black flex flex-col items-start p-8 shadow-lg z-50 transition-transform transform sm:hidden"
          style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)', transition: 'transform 0.3s ease-in-out' }}
        >
          <button onClick={toggleMenu} className="ml-auto text-black">
            <AiOutlineClose size={24} />
          </button>
          <ul className="mt-8 space-y-4 text-lg sm:text-base">
            <li><a href="#home" onClick={toggleMenu} className="sm:text-sm">HOME</a></li>
            <li><a href="#services" onClick={toggleMenu} className="sm:text-sm">SERVICES</a></li>
            <li><a href="#about" onClick={toggleMenu} className="sm:text-sm">ABOUT US</a></li>
            <li><a href="#contact" onClick={toggleMenu} className="sm:text-sm">CONTACT US</a></li>
            <li><a href="#careers" onClick={toggleMenu} className="sm:text-sm">CAREERS</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
