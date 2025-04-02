import React from 'react';
import {
    FaPhone,
    FaEnvelope,
    FaUser,
    FaLinkedin,
    FaTwitter,
    FaFacebook,
} from 'react-icons/fa';
const Top = () => {
    return (
        <div className={`w-full text-white py-3`}>
            <div className='container mx-auto px-6 flex justify-between items-center'>
                <div className='flex space-x-6'>
                    <a
                        href='tel:+919845442227'
                        className={`flex items-center transition-colors`}
                    >
                        <FaPhone className='mr-2' />
                        <span className='text-sm md:text-base'>
                            +91 98454 42227
                        </span>
                    </a>
                    <a
                        href='mailto:info@smaatix.com'
                        className={`flex items-center transition-colors`}
                    >
                        <FaEnvelope className='mr-2' />
                        <span className='text-sm md:text-base'>
                            info@smaatix.com
                        </span>
                    </a>
                </div>
                <div className='flex items-center space-x-4'>
                    <a
                        href='/login'
                        className={`flex items-center transition-colors`}
                    >
                        <FaUser className='mr-2' />
                        <span className='text-sm md:text-base'>
                            Employee Login
                        </span>
                    </a>
                    <div className='flex space-x-3'>
                        <a
                            href='#'
                            className={`transition-colors`}
                        >
                            <FaLinkedin size={18} />
                        </a>
                        <a
                            href='#'
                            className={` transition-colors`}
                        >
                            <FaTwitter size={18} />
                        </a>
                        <a
                            href='#'
                            className={`transition-colors`}
                        >
                            <FaFacebook size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Top;
