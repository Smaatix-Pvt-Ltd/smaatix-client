import React from 'react';
import Top from './Top';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div className='sticky top-0 z-50 bg-gradient-to-r from-gray-900 to-purple-500 dark:bg-gradient-to-r dark:from-black dark:to-[#212121] flex justify-between items-center shadow-lg drop-shadow-2xl'>
            {/* Logo Section */}
            <div className='flex  ml-10'>
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

            <Navbar />
        </div>
    );
};

export default Header;
