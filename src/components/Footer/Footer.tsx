// import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className=' w-full h-full dark:text-white border-t-[1px] border-purple-900  dark:border-zinc-700 bg-gradient-to-r from-purple-900 to-grey-100  dark:bg-gradient-to-r dark:from-zinc-900 dark:to-zinc-900'>
            <div className='mt-4  grid grid-cols-1 md:grid-cols-3 gap-8 items-center'>
                {/* Logo */}
                <div className='flex items-center'>
                    <a
                        href='/'
                        className='mr-10'
                    >
                        <div className='w-36 h-12 relative bg-white rounded-md p-1'>
                            <img
                                src='smaatix-logo.png'
                                alt='Smaatix'
                                className='w-full h-full object-contain'
                            />
                        </div>
                    </a>
                </div>

                {/* Amenities Provided by the Company */}
                <div className='text-center'>
                    <ul className='text-sm grid grid-cols-2 gap-2'>
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
                <div className='flex justify-center space-x-4'>
                    <a href='#'>
                        <FaFacebook size={24} />
                    </a>
                    <a href='#'>
                        <FaTwitter size={24} />
                    </a>
                    <a href='#'>
                        <FaLinkedin size={24} />
                    </a>
                    <a href='#'>
                        <FaInstagram size={24} />
                    </a>
                </div>
            </div>

            {/* Copyright Section */}
            <div className='text-center text-sm text-gray-400 mt-6'>
                <p>
                    &copy; {new Date().getFullYear()} Smaatix. All Rights
                    Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
