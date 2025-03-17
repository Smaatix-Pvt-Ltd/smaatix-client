import React from 'react';
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaInstagram,
    FaLinkedin,
    FaFacebook,
    FaTwitter,
} from 'react-icons/fa';
const ContactCard = () => {
    return (
        <div className='lg:w-[600px]dark:text-white dark:bg-zinc-800 rounded-lg dark:border dark:border-white'>
            <div className={`p-8 rounded-xl shadow-lg`}>
                <h3 className={`text-2xl font-bold mb-6 }`}>
                    Contact Information
                </h3>

                <div className='space-y-6'>
                    <div className='flex items-center  gap-3'>
                        <FaPhoneAlt />
                        <aside>
                            <h4 className='font-medium '>Phone</h4>
                            <p className='text-gray-600 mt-1'>+91 9845442227</p>
                        </aside>
                    </div>

                    <div className='flex items-center  gap-3'>
                        <FaEnvelope />
                        <div>
                            <h4 className='font-medium '>Email</h4>
                            <p className='text-gray-600 mt-1'>
                                info@smaatix.com
                            </p>
                        </div>
                    </div>

                    <div className='flex items-center  gap-3'>
                        <FaMapMarkerAlt />
                        <div>
                            <h4 className='font-medium '>Location</h4>
                            <p className='text-gray-600 mt-1'>
                                123 Business Ave, Thirumenahalli
                                <br />
                                Bengaluru, India
                            </p>
                        </div>
                    </div>
                </div>

                <div className='mt-8'>
                    <h4 className={`font-medium mb-4 `}>Follow Us</h4>
                    <div className='flex space-x-4'>
                        <a
                            href='#'
                            className={`w-10 h-10 rounded-full  flex items-center justify-center text-white hover:opacity-90 transition-opacity`}
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href='#'
                            className={`w-10 h-10 rounded-full  flex items-center justify-center text-white hover:opacity-90 transition-opacity`}
                        >
                            <FaFacebook />
                        </a>
                        <a
                            href='#'
                            className={`w-10 h-10 rounded-full flex items-center justify-center text-white hover:opacity-90 transition-opacity`}
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href='#'
                            className={`w-10 h-10 rounded-full  flex items-center justify-center text-white hover:opacity-90 transition-opacity`}
                        >
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;
