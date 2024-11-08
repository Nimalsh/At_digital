import React from 'react';
import logo from '../assets/images/logo.png';

const Header = () => (
  <header className="bg-primary text-white p-4  flex justify-between items-center">
    <a href="#home" className="flex items-center ml-12">
      <img src={logo} alt="AT DIGITAL Logo"  /> 
    </a>
    <nav>
      <ul className="flex space-x-4 mr-12 text-sm">
        <li><a href="#services">SERVICES</a></li>
        <li><a href="#about">ABOUT US</a></li>
        <li><a href="#contact">CONTACT US</a></li>
        <li><a href="#careers">CAREERS</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
