import React from 'react';
import ThemeToggle from '../UI/ThemeToggle';

const Navbar1 = () => {
    return (
        <nav className={` py-4 `}>
            <div className='container mx-auto px-6 flex justify-between items-center'>
                {/* Navigation Links */}
                <div className='hidden md:flex space-x-6 items-center'>
                    <a
                        href='/software'
                        className={`text-gray-100 transition-colors font-medium`}
                    >
                        Software Solution
                    </a>
                    <a
                        href='/training'
                        className={`text-gray-100 transition-colors font-medium`}
                    >
                        Training
                    </a>
                    <a
                        href='/staffing'
                        className={`text-gray-100 transition-colors font-medium`}
                    >
                        Staffing Solution
                    </a>
                    <a
                        href='/finance'
                        className={`text-gray-100 transition-colors font-medium`}
                    >
                        Fin Service
                    </a>
                    <div className='relative group'>
                        <a
                            href='#'
                            className={`text-gray-100 transition-colors font-medium flex items-center`}
                        >
                            Corporate Gifting
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-4 w-4 ml-1'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M19 9l-7 7-7-7'
                                />
                            </svg>
                        </a>
                        <div className='absolute left-0 mt-2 w-48 bg-white  rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50'>
                            <a
                                href='#'
                                className={`block px-4 py-2 text-sm text-gray-700`}
                            >
                                Corporate Gifts
                            </a>
                            <a
                                href='#'
                                className={`block px-4 py-2 text-sm text-gray-700 `}
                            >
                                Custom Solutions
                            </a>
                            <a
                                href='#'
                                className={`block px-4 py-2 text-sm text-gray-700 `}
                            >
                                Bulk Orders
                            </a>
                        </div>
                    </div>
                </div>
                <ThemeToggle />
                {/* Contact Us Button */}
                <a
                    href='/contact'
                    className={` text-white py-2 px-4 rounded-md transition-colors font-medium`}
                >
                    Contact Us
                </a>
            </div>
        </nav>
    );
};

export default Navbar1;
