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
const ContactCard = ({ contactDetails }) => {
    return (
        <div>
            <div>
                <h3 className='text-2xl font-semibold text-foreground mb-6'>
                    Contact Information
                </h3>
                <div className='space-y-6'>
                    {contactDetails.map((item, index) => (
                        <div
                            key={index}
                            className='flex items-start gap-4'
                        >
                            <div className='flex-shrink-0 text-accent-start mt-1'>
                                {/* Add size to icon */}
                                {React.cloneElement(
                                    item.icon as React.ReactElement,
                                    { className: 'w-5 h-5' }
                                )}
                            </div>
                            <div>
                                <h4 className='text-sm font-medium text-foreground-secondary'>
                                    {item.label}
                                </h4>
                                {item.href ? (
                                    <a
                                        href={item.href}
                                        className='text-base text-foreground hover:text-accent-start hover:underline'
                                    >
                                        {item.value}
                                    </a>
                                ) : (
                                    <p className='text-base text-foreground'>
                                        {item.value}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                {/* <div className='mt-8'>
                    <h4 className={`font-medium mb-4 `}>Follow Us</h4>
                    <div className='flex space-x-4'>
                        <a
                            href='#'
                            className={`w-10 h-10 rounded-full  flex items-center justify-center text-gray-600 hover:opacity-90 transition-opacity`}
                        >
                            <FaTwitter />
                        </a>
                        <a
                            href='#'
                            className={`w-10 h-10 rounded-full  flex items-center justify-center text-gray-600 hover:opacity-90 transition-opacity`}
                        >
                            <FaFacebook />
                        </a>
                        <a
                            href='#'
                            className={`w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:opacity-90 transition-opacity`}
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href='#'
                            className={`w-10 h-10 rounded-full  flex items-center justify-center text-gray-600 hover:opacity-90 transition-opacity`}
                        >
                            <FaInstagram />
                        </a>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default ContactCard;
