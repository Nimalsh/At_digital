import React from 'react';
import logo from '../assets/images/logo.png';

const Footer = () => (
  <footer className="bg-primary text-white py-6">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
      
      {/* Left Side: AT Digital Section */}
      <div className="w-full md:w-1/2 flex flex-col items-start mb-6 md:mb-0 px-4 md:pl-10 md:pr-10">
        <a href="#home" className="flex items-center mb-4">
          <img src={logo} alt="AT DIGITAL Logo" className="mr-4" />
        </a>
        <p className="text-sm md:pr-20">
          Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve a single objective - your business results.
        </p>
      </div>

      {/* Right Side: Technologies and Services Sections */}
      <div className="w-full md:w-1/2 flex flex-col md:flex-row md:space-x-8 px-4 md:px-0">
        
        {/* Technologies Section */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 md:ml-10">
          <h3 className="font-semibold text-lg">Our Technologies</h3>
          <ul className="text-sm mt-2 space-y-1">
            <li>ReactJS</li>
            <li>Gatsby</li>
            <li>NextJS</li>
            <li>NodeJS</li>
          </ul>
        </div>

        {/* Services Section */}
        <div className="w-full md:w-1/2">
          <h3 className="font-semibold text-lg">Our Services</h3>
          <ul className="text-sm mt-2 space-y-1">
            <li>Social Media Marketing</li>
            <li>Web & Mobile App Development</li>
            <li>Data & Analytics</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Half-width Line */}
    <div className="container mx-auto mt-6 flex justify-center">
      <div className="w-11/12 md:w-1/2 border-t border-gray-400"></div>
    </div>

    {/* Bottom Links */}
    <div className="container mx-auto px-4 mt-4 text-center pt-4">
      <p className="text-sm">
        <a href="#" className="text-white mx-2">Privacy Policy</a> |
        <a href="#" className="text-white mx-2">Terms & Conditions</a>
      </p>
    </div>
  </footer>
);

export default Footer;
