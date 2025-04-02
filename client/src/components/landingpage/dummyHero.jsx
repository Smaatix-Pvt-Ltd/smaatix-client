import React from 'react';
import { FaPhone, FaEnvelope, FaUser, FaLinkedin, FaTwitter, FaFacebook, FaArrowDown } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <>
      {/* Top bar */}
      <div className="w-full bg-blue-500 text-white py-3">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-6">
            <a href="tel:+919845442227" className="flex items-center hover:text-blue-100 transition-colors">
              <FaPhone className="mr-2" />
              <span>+91 98454 42227</span>
            </a>
            <a href="mailto:info@smaatix.com" className="flex items-center hover:text-blue-100 transition-colors">
              <FaEnvelope className="mr-2" />
              <span>info@smaatix.com</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/login" className="flex items-center hover:text-blue-100 transition-colors">
              <FaUser className="mr-2" />
              <span>Employee Login</span>
            </a>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-blue-100 transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="hover:text-blue-100 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-100 transition-colors">
                <FaFacebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white py-4 shadow-md z-10 relative">
        <div className="container mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center">
            <a href="/" className="mr-10">
                <div className="flex items-center">
                <div className="w-32 h-12 relative">
                    <img src='smaatix-logo.png' alt="Smaatix" className="w-full h-full object-contain" />
                </div>
                </div>
            </a>
            <div className="hidden md:flex space-x-6">
                <a href="/software" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Software Solution</a>
                <a href="/training" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Training</a>
                <a href="/staffing" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Staffing Solution</a>
                <a href="/finance" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Fin Service</a>
                <div className="relative group">
                <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-medium flex items-center">
                    Corporate Gifting
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </a>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Corporate Gifts</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Custom Solutions</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50">Bulk Orders</a>
                </div>
                </div>
            </div>
            </div>
            <a href="/contact" className="bg-purple-600 text-white hover:bg-purple-700 py-2 px-4 rounded-md transition-colors font-medium">Contact Us</a>
        </div>
      </nav>

      {/* Hero section with wave */}
      <div className="relative">
        {/* Background with gradient */}
        <div className="w-full h-[35rem] bg-gradient-to-r from-black via-purple-900 to-purple-500 flex flex-col justify-center items-center text-white">
        {/* <div className="w-full h-[35rem] bg-gradient-to-r from-black to-emerald-800 flex flex-col justify-center items-center text-white"> */}
        {/* <div className="w-full h-[35rem] bg-gradient-to-r from-black via-amber-900 to-amber-600 flex flex-col justify-center items-center text-white"> */}
        {/* <div className="w-full h-[35rem] bg-gradient-to-r from-black via-teal-900 to-teal-500 flex flex-col justify-center items-center text-white"> */}
        {/* <div className="w-full h-[35rem] bg-gradient-to-r from-blue-900 via-blue-500 to-cyan-400 flex flex-col justify-center items-center text-white"> */}
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            {/* Left Column */}
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Go Beyond Your Wildest Dreams</h3>
              <h1 className="text-4xl font-bold mb-6">Your Digital Presence Is About To Take Off</h1>
              <a
                href="https://www.smaatix.com/contact-us/"
                className="inline-flex items-center bg-white text-purple-500 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                <span className="mr-2">Contact Us</span>
                <FaArrowDown />
              </a>
            </div>

            {/* Right Column
            <div className="image-container">
                <img src="https://www.smaatix.com/wp-content/uploads/2022/02/Hero-Home-page-new.png"
                alt="Hero"
                loading="lazy" className="curved-image" />
            </div> */}
          </div>
        </div>

        {/* Wave shape */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-24 transform rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              fill="#ffffff"
              opacity="1"
            ></path>
          </svg>
        </div>

        {/* Circular decorative elements */}
        <div className="absolute left-10 top-20 w-40 h-40 bg-blue-700 rounded-full opacity-20"></div>
        <div className="absolute right-20 bottom-40 w-64 h-64 bg-cyan-300 rounded-full opacity-20"></div>
      </div>
    </>
  );
};

export default Hero;