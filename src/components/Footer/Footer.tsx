import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = ({ colorTheme, setColorTheme }) => {
    const themes = {
        purple: {
            bgColor: "bg-purple-900",
            textColor: "text-purple-200",
            iconColor: "text-purple-400 hover:text-purple-200"
        },
        teal: {
            bgColor: "bg-teal-900",
            textColor: "text-teal-200",
            iconColor: "text-teal-400 hover:text-teal-200"
        },
        emerald: {
            bgColor: "bg-emerald-900",
            textColor: "text-emerald-200",
            iconColor: "text-emerald-400 hover:text-emerald-200"
        },
        blue: {
            bgColor: "bg-blue-900",
            textColor: "text-blue-200",
            iconColor: "text-blue-400 hover:text-blue-200"
        },
        rose: {
            bgColor: "bg-rose-900",
            textColor: "text-rose-200",
            iconColor: "text-rose-400 hover:text-rose-200"
        }
    };

    const currentTheme = themes[colorTheme] || themes.purple;

    return (
        <footer className={`${currentTheme.bgColor} text-white py-6 px-10`}>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <a href="/" className="mr-10">
                        <div className="w-36 h-12 relative bg-white rounded-md p-1">
                            <img src='smaatix-logo.png' alt="Smaatix" className="w-full h-full object-contain" />
                        </div>
                    </a>
                </div>

                {/* Amenities Provided by the Company */}
                <div className="text-center">
                    <ul className="text-sm grid grid-cols-2 gap-2">
                        <li>Software Development</li>
                        <li>Cloud Solutions</li>
                        <li>AI & Machine Learning</li>
                        <li>Cybersecurity</li>
                        <li>Data Analytics</li>
                        <li>Blockchain Solutions</li>
                        <li>IT Consulting</li>
                    </ul>
                </div>


                {/* Social Media Links */}
                <div className="flex justify-center space-x-4">
                    <a href="#" className={`${currentTheme.iconColor}`}>
                        <FaFacebook size={24} />
                    </a>
                    <a href="#" className={`${currentTheme.iconColor}`}>
                        <FaTwitter size={24} />
                    </a>
                    <a href="#" className={`${currentTheme.iconColor}`}>
                        <FaLinkedin size={24} />
                    </a>
                    <a href="#" className={`${currentTheme.iconColor}`}>
                        <FaInstagram size={24} />
                    </a>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center text-sm text-gray-400 mt-6">
                <p>&copy; {new Date().getFullYear()} Smaatix. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
