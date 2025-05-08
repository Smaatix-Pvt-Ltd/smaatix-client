import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaArrowRight, FaPhone, FaMapMarkerAlt, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [year] = useState(new Date().getFullYear());
    const [socialMedia, setSocialMedia] = useState([]);

    const ApiURl = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        // Fetch social media links from backend
        const fetchSocialMediaLinks = async () => {
            try {
                const response = await fetch(`${ApiURl}/api/social-links/get`);
                if (response.ok) {
                    const data = await response.json();
                    const links = data?.links?.[0];

                    const formattedLinks = [
                        { platform: 'facebook', url: links.facebook || '', icon: 'FaFacebook' },
                        { platform: 'twitter', url: links.twitter || '', icon: 'FaTwitter' },
                        { platform: 'linkedin', url: links.linkedin || '', icon: 'FaLinkedin' },
                        { platform: 'instagram', url: links.instagram || '', icon: 'FaInstagram' },
                        { platform: 'youtube', url: links.youtube || '', icon: 'FaYoutube' }
                    ];

                    setSocialMedia(formattedLinks);
                } else {
                    console.error('Failed to fetch social media links');
                    // setSocialMedia(getFallbackLinks());
                }
            } catch (error) {
                console.error('Error fetching social media links:', error);
                // setSocialMedia(getFallbackLinks());
            }
        };

        fetchSocialMediaLinks();
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;

        setIsSubmitting(true);
        try {
            // Replace with your actual API endpoint
            const response = await fetch(`${ApiURl}/api/newsletter/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setEmail('');
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus(null), 3000);
        }
    };

    // Get the corresponding icon component
    const getSocialIcon = (iconName, size = 22) => {
        switch (iconName) {
            case 'FaFacebook':
                return <FaFacebook size={size} />;
            case 'FaTwitter':
                return <FaTwitter size={size} />;
            case 'FaLinkedin':
                return <FaLinkedin size={size} />;
            case 'FaInstagram':
                return <FaInstagram size={size} />;
            case 'FaYoutube':
                return <FaYoutube size={size} />;
            default:
                return <FaFacebook size={size} />;
        }
    };

    // Navigation links from your Routes component
    const navLinks = [
        { path: '/index', label: 'Home' },
        { path: '/about-us', label: 'About Us' },
        { path: '/software-solutions', label: 'Software Solutions' },
        { path: '/staffing-solutions', label: 'Staffing Solutions' },
        { path: '/products', label: 'Products' },
        { path: '/training', label: 'Training' },
        { path: '/careers', label: 'Careers' },
        { path: '/contact', label: 'Contact' }
    ];

    // Services offered
    const services = [
        { path: '/software-solutions', label: 'Software Solutions' },
        { path: '/staffing-solutions', label: 'Staffing Solutions' },
    ];

    // Company contact information
    const contactInfo = {
        address1: "36/5, Hustlehub Tech Park, Somasundarapalya Main Rd, adjacent 27th Main Road, ITI Layout, Sector 2, HaralukunteVillage, HSR Layout, Bengaluru, Karnataka, India-560102",
        address2: "Near Bharathi City, Thirumenahalli, Karnataka, India-560064 (below SLV HITECH STAY)",
        phone: "+91 9845442227",
        email: "info@smaatix.com"
    };

    return (
        <footer className="relative w-full dark:text-white border-t-2 border-purple-600 dark:border-zinc-700 overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-purple-900 to-indigo-800 dark:from-zinc-900 dark:to-zinc-800">
                <div className="absolute inset-0 opacity-10">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute bg-white rounded-full"
                            style={{
                                width: Math.random() * 6 + 2 + 'px',
                                height: Math.random() * 6 + 2 + 'px',
                                top: Math.random() * 100 + '%',
                                left: Math.random() * 100 + '%'
                            }}
                            animate={{
                                y: [0, -100],
                                opacity: [0.7, 0]
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                ease: "linear",
                                delay: Math.random() * 10
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Content container with relative positioning to stay above background */}
            <div className="relative z-10 container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Column 1: Logo & About */}
                   

                    {/* Column 2: Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            {navLinks.map((link, i) => (
                                <motion.li 
                                    key={i}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <Link 
                                        to={link.path} 
                                        className="text-gray-300 hover:text-white transition-colors flex items-center"
                                    >
                                        <FaArrowRight className="mr-2 text-xs text-purple-400" />
                                        {link.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Column 3: Services + Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        className="flex flex-col space-y-6"
                    >
                        <div>
                            <h3 className="text-lg font-semibold mb-5 text-gray-100">Our Services</h3>
                            <ul className="space-y-3">
                                {services.map((service, i) => (
                                    <motion.li
                                        key={i}
                                        whileHover={{ translateX: 8 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                    >
                                        <Link
                                            to={service.path}
                                            className="text-gray-400 hover:text-indigo-300 transition-colors flex items-center"
                                        >
                                            <FaArrowRight className="mr-2 text-xs text-indigo-400" />
                                            {service.label}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                       
                        

                    </motion.div>

                    <div>
                            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start text-gray-300">
                                    <div className="flex-shrink-0 w-5 h-5 mr-3">
                                        <FaMapMarkerAlt className="mt-1 text-purple-400 w-full h-full" />
                                    </div>
                                    <span>{contactInfo.address1}</span>
                                </li>
                                <li className="flex items-start text-gray-300">
                                    <div className="flex-shrink-0 w-5 h-5 mr-3">
                                        <FaMapMarkerAlt className="mt-1 text-purple-400 w-full h-full" />
                                    </div>
                                    <span>{contactInfo.address2}</span>
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <div className="flex-shrink-0 w-5 h-5 mr-3">
                                        <FaPhone className="text-purple-400 w-full h-full" />
                                    </div>
                                    <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors">
                                        {contactInfo.phone}
                                    </a>
                                </li>
                                <li className="flex items-center text-gray-300">
                                    <div className="flex-shrink-0 w-5 h-5 mr-3">
                                        <FaEnvelope className="text-purple-400 w-full h-full" />
                                    </div>
                                    <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                                        {contactInfo.email}
                                    </a>
                                </li>
                            </ul>
                    </div>

                    
                    {/* Column 4: Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col space-y-4"
                    >
                        <Link to="/" className="inline-block">
                            <div className="w-40 h-14 relative bg-white rounded-md p-1 shadow-lg transition-transform hover:scale-105">
                                <img
                                    src="/smaatix-logo.png"
                                    alt="Smaatix"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </Link>
                        <p className="text-mb text-gray-200 dark:text-gray-300 mt-4">
                            Innovative technology solutions for businesses of all sizes. 
                            Empowering your digital transformation journey.
                        </p>
                        
                        {/* Social Media Icons - Fetched from backend */}
                        <div className="flex space-x-4 mt-4">
                            {socialMedia.map((social, i) => (
                                <motion.a 
                                    key={i}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="text-gray-200 hover:text-white transition-colors"
                                >
                                    {getSocialIcon(social.icon)}
                                </motion.a>
                            ))}
                        </div>
                         {/* Newsletter */}

                     <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <h3 className="text-lg font-semibold mb-4 text-white">Newsletter</h3>
                                <p className="text-sm text-gray-300 mb-4">
                                    Subscribe to our newsletter for updates on the latest tech trends and company news.
                                </p>
                                
                                <form onSubmit={handleSubmit} className="relative">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Your email address"
                                        className="w-full px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-purple-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        required
                                    />
                                    
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="mt-2 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
                                    >
                                        {isSubmitting ? (
                                            <span className="inline-block h-4 w-4 border-t-2 border-white rounded-full animate-spin mr-2" />
                                        ) : null}
                                        Subscribe
                                        <FaEnvelope className="ml-2" />
                                    </motion.button>
                                    
                                    {submitStatus === 'success' && (
                                        <motion.p 
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-green-400 text-sm mt-2"
                                        >
                                            Successfully subscribed!
                                        </motion.p>
                                    )}
                                    
                                    {submitStatus === 'error' && (
                                        <motion.p 
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-red-400 text-sm mt-2"
                                        >
                                            There was an error. Please try again.
                                        </motion.p>
                                    )}
                                </form>
                    </motion.div>
                    </motion.div>
                    
                    
                </div>

                {/* Bottom Bar */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="border-t border-purple-500/30 mt-10 pt-6 text-center"
                >
                    <p className="text-sm text-gray-300">
                        &copy; {year} Smaatix. All Rights Reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;