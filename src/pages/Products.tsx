import React from 'react';
import {
    FaRocket,
    FaPhone,
    FaEnvelope,
    FaCloud,
    FaShieldAlt,
    FaCode,
    FaBuilding,
    FaLaptopCode,
    FaBriefcase,
    FaExpandArrowsAlt,
    FaLock,
    FaBolt,
    FaDatabase,
    FaBrain,
    FaCheck,
    FaPlay,
    FaAws,
    FaGoogle,
    FaMicrosoft,
    FaStripe,
    FaPaypal,
    FaWhatsapp,
    FaSms,
    FaSalesforce,
} from 'react-icons/fa';
import Card from '../components/Products/Card';
import ThreeDCard from '../components/Products/ThreedCard';
import Marquee from 'react-fast-marquee';
import RoboImg from '../assets/Images/Robo.jpg';
import Plant from '../assets/Images/Plant.png';
import Blynk from '../assets/Images/Blynk.jpg';
import Gym from '../assets/Images/Gym.png';
import Cravecure from '../assets/Images/Cravecure.png';

const Products: React.FC = () => {
    const projects = [
        {
            name: 'Object Based Navigation Robot',
            description:
                'Developed an autonomous robot for object-based navigation using ROS',
            image: RoboImg,
            technologies: [
                'Python',
                'Android Development',
                'Machine Learning',
                'ROS',
            ], // Make sure this is an array
            url: 'https://github.com/Abhivarun7/Robot_Navigation_Using_Vision',
        },
        {
            name: 'App-Based Plant Disease Detection',
            description:
                'Developed a mobile application that uses image analysis to identify plant diseases accurately',
            image: Plant,
            technologies: ['Python', 'Data Analysis', 'Machine Learning'], // Make sure this is an array
            url: 'https://github.com/Abhivarun7/Plant_disease_detection',
        },
        {
            name: 'Home Automation System',
            description:
                'Designed and implemented a home automation system using NodeMCU connected to WiFi for receiving signals from the Blynk app.',
            image: Blynk,
            technologies: ['Blynk', 'NodeMCU', 'Relay Modules'], // Make sure this is an array
        },
        {
            name: 'Gym Management System',
            description:
                'Created a comprehensive web page for managing gym members, staff, and equipment efficiently.',
            image: Gym,
            technologies: ['HTML', 'CSS', 'Java Script', 'MySQL'], // Make sure this is an array
            url: 'https://www.linkedin.com/posts/abhi-ram-3b9251279_html-css-javascript-activity-7069574199547219968-R1nd?utm_source=share&utm_medium=member_desktop',
        },
        {
            name: 'Food Ordering Website',
            description:
                'An e-commerce platform offering a seamless shopping experience with modern UI and efficient backend integration.',
            image: Cravecure,
            technologies: ['React', 'Node.js', 'Express.js', 'Mongodb'], // Make sure this is an array
            url: 'https://cravecure.netlify.app',
        },
    ];

    return (
        <div className='font-sans text-gray-800'>
            {/* Hero Section */}
            <section className='bg-gradient-to-r from-purple-900 to-purple-400 dark:bg-gradient-to-b dark:from-black dark:to-[#212121] text-white py-20'>
                <div className='container mx-auto px-4'>
                    <div className='max-w-3xl mx-auto text-center'>
                        <h1 className='text-4xl md:text-5xl font-bold mb-6'>
                            Empowering Businesses with{' '}
                            <span className='text-white'>
                                Scalable Software Solutions
                            </span>
                        </h1>
                        <p className='text-xl mb-8'>
                            Smaatix provides high-performance, secure, and
                            scalable software solutions to help businesses
                            optimize operations, enhance security, and drive
                            innovation.
                        </p>

                        <div className='grid md:grid-cols-3 gap-4 mb-10'>
                            <div className='flex items-center  bg-opacity-40 p-4 rounded-lg'>
                                <FaCloud className='text-2xl mr-2' />
                                <span>Cloud-based SaaS Applications</span>
                            </div>
                            <div className='flex items-center  bg-opacity-40 p-4 rounded-lg'>
                                <FaShieldAlt className='text-2xl mr-2' />
                                <span>Enterprise-Grade Security</span>
                            </div>
                            <div className='flex items-center  bg-opacity-40 p-4 rounded-lg'>
                                <FaCode className='text-2xl mr-2' />
                                <span>Custom Software Development</span>
                            </div>
                        </div>

                        <div className='flex flex-wrap justify-center gap-4'>
                            <a
                                href='#'
                                className='flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md transition-colors'
                            >
                                <FaRocket className='mr-2' />
                                Get Started
                            </a>
                            <a
                                href='#'
                                className='flex items-center bg-transparent border border-white hover:bg-white hover:text-purple-600 text-white px-6 py-3 rounded-md transition-colors'
                            >
                                <FaPhone className='mr-2' />
                                Request a Demo
                            </a>
                            <a
                                href='#'
                                className='flex items-center bg-transparent border border-white hover:bg-white hover:text-purple-600 text-white px-6 py-3 rounded-md transition-colors'
                            >
                                <FaEnvelope className='mr-2' />
                                Contact Sales
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section
                id='overview'
                className='py-20'
            >
                <div className='container mx-auto px-4'>
                    <div className='max-w-6xl mx-auto'>
                        <div className='text-center mb-16'>
                            <h2 className='text-3xl dark:text-white font-bold mb-3'>
                                Product Overview
                            </h2>
                            <p className='text-gray-600 dark:text-white'>
                                Discover what Smaatix can do for your business
                            </p>
                        </div>

                        <div className='grid md:grid-cols-2 gap-10 items-center'>
                            <div>
                                <h3 className='text-2xl font-bold mb-4 dark:text-white'>
                                    What is Smaatix?
                                </h3>
                                <p className='text-gray-700 mb-6 dark:text-white'>
                                    Smaatix is a software IT company
                                    specializing in building modern, scalable,
                                    and secure applications using the latest
                                    technologies. Our solutions focus on
                                    automation, data security, and seamless
                                    integration for businesses of all sizes.
                                </p>

                                <h4 className='text-xl font-bold mb-4 dark:text-white'>
                                    Who is it for?
                                </h4>
                                <div className='space-y-4 mb-8'>
                                    <div className='flex items-start'>
                                        <FaBuilding className='text-purple-600 text-xl mt-1 mr-3' />
                                        <span className='dark:text-white'>
                                            <strong className='dark:text-white'>
                                                Startups & Enterprises
                                            </strong>{' '}
                                            looking for custom software tailored
                                            to their needs.
                                        </span>
                                    </div>
                                    <div className='flex items-start'>
                                        <FaLaptopCode className='text-purple-600 text-xl mt-1 mr-3' />
                                        <span className='dark:text-white'>
                                            <strong className='dark:text-white'>
                                                Developers & IT Teams
                                            </strong>{' '}
                                            needing robust backend solutions
                                            with Spring Boot.
                                        </span>
                                    </div>
                                    <div className='flex items-start'>
                                        <FaBriefcase className='text-purple-600 text-xl mt-1 mr-3' />
                                        <span className='dark:text-white'>
                                            <strong className='dark:text-white'>
                                                Businesses
                                            </strong>{' '}
                                            requiring secure authentication, API
                                            integrations, and database
                                            management.
                                        </span>
                                    </div>
                                </div>

                                <div className='space-y-6'>
                                    <div className='flex items-start  p-4 rounded-lg'>
                                        <FaExpandArrowsAlt className='text-purple-600 text-xl mt-1 mr-3' />
                                        <div>
                                            <h5 className='font-bold dark:text-white'>
                                                Scalability
                                            </h5>
                                            <p className='text-gray-700 dark:text-white'>
                                                Our cloud-native architecture
                                                ensures high availability and
                                                performance.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex items-start  p-4 rounded-lg'>
                                        <FaLock className='text-purple-600 text-xl mt-1 mr-3' />
                                        <div>
                                            <h5 className='font-bold dark:text-white'>
                                                Security
                                            </h5>
                                            <p className='text-gray-700 dark:text-white'>
                                                Advanced authentication (OAuth2,
                                                JWT) and data encryption.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='bg-gray-100 p-4 rounded-lg aspect-video flex items-center justify-center'>
                                <div className='text-center'>
                                    <p className='text-gray-500'>
                                        Dashboard Preview Image
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section
                id='features'
                className='py-20 bg-white dark:bg-[#212121]'
            >
                <div className='container mx-auto px-4'>
                    <div className='text-center mb-16'>
                        <h2 className='text-3xl font-bold mb-3 dark:text-white'>
                            Features & Benefits
                        </h2>
                        <p className='text-gray-600 dark:text-white'>
                            Explore the powerful features that make Smaatix
                            stand out
                        </p>
                    </div>

                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                        <Card
                            logo={
                                <FaCode className='text-purple-600 text-3xl' />
                            }
                            heading='Custom Software Development'
                            description='Tailor-made solutions designed specifically for your business needs'
                            point1='Tailor-made solutions based on business needs'
                            point2='Scalable microservices architecture with Spring Boot'
                        />

                        <Card
                            logo={
                                <FaShieldAlt className='text-purple-600 text-3xl' />
                            }
                            heading='Secure Authentication'
                            description='Enterprise-grade security for your applications and data'
                            point1='OAuth2, JWT, Multi-Factor Authentication (MFA)'
                            point2='Role-based access for enterprise security'
                        />

                        <Card
                            logo={
                                <FaBolt className='text-purple-600 text-3xl' />
                            }
                            heading='Real-Time Data Processing'
                            description='Process and analyze data as it comes in'
                            point1='Apache Kafka-powered event-driven architecture'
                            point2='Fast, asynchronous data handling'
                        />

                        <Card
                            logo={
                                <FaCloud className='text-purple-600 text-3xl' />
                            }
                            heading='Cloud Integration'
                            description='Seamless integration with popular cloud platforms'
                            point1='Seamless integration with AWS, Azure, and Google Cloud'
                            point2='RESTful APIs for third-party connectivity'
                        />

                        <Card
                            logo={
                                <FaDatabase className='text-purple-600 text-3xl' />
                            }
                            heading='Database Management'
                            description='Optimized database solutions for performance and security'
                            point1='PostgreSQL-based scalable database solutions'
                            point2='Image and file storage with secure access'
                        />

                        <Card
                            logo={
                                <FaBrain className='text-purple-600 text-3xl' />
                            }
                            heading='AI-Powered Analytics'
                            description='Gain insights from your data with advanced analytics'
                            point1='Smart analytics for business intelligence'
                            point2='Automated workflows for efficiency'
                        />
                    </div>
                </div>
            </section>

            {/* Products Section */}
            <section
                id='features'
                className='py-20 bg-white dark:bg-[#212121]'
            >
                <div className='container mx-auto px-4'>
                    <div className='text-center mb-16'>
                        <h2 className='text-3xl font-bold mb-3 dark:text-white'>
                            Our Products, Your Success
                        </h2>
                        <p className='text-gray-600 dark:text-white'>
                            Explore our range of powerful solutions that drive
                            innovation and deliver outstanding value.
                        </p>
                    </div>

                    <div className='flex justify-center items-center py-4 animate-fadeIn'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 w-full max-w-6xl px-4'>
                            {projects.map((project, index) => (
                                <div
                                    key={index}
                                    className='flex justify-center items-center'
                                >
                                    <ThreeDCard project={project} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Workflow Section */}
            <section
                id='workflow'
                className='py-20'
            >
                <div className='container mx-auto px-4'>
                    <div className='text-center mb-16'>
                        <h2 className='text-3xl font-bold mb-3 dark:text-white'>
                            How It Works
                        </h2>
                        <p className='text-gray-600 dark:text-white'>
                            Our proven process to deliver outstanding results
                        </p>
                    </div>

                    <div className='flex flex-col md:flex-row justify-center gap-6 mb-16 max-w-5xl mx-auto '>
                        {[
                            {
                                num: 1,
                                title: 'Requirement Gathering',
                                desc: 'Understand client needs and define scope',
                            },
                            {
                                num: 2,
                                title: 'Solution Design',
                                desc: 'Architecture design using Spring Boot, React, and PostgreSQL',
                            },
                            {
                                num: 3,
                                title: 'Testing & Security',
                                desc: 'Comprehensive testing and security audits',
                            },
                            {
                                num: 4,
                                title: 'Deployment',
                                desc: 'Cloud-based deployment with CI/CD pipelines',
                            },
                            {
                                num: 5,
                                title: 'Support & Maintenance',
                                desc: 'Ongoing updates and optimizations',
                            },
                        ].map((step, index) => (
                            <div
                                key={index}
                                className='flex-1 text-center bg-white p-6 rounded-lg shadow-md relative dark:bg-gray-800'
                            >
                                <div className='bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold absolute -top-5 left-1/2 transform -translate-x-1/2'>
                                    {step.num}
                                </div>
                                <h4 className='text-lg font-bold mt-4 mb-2 dark:text-gray-300'>
                                    {step.title}
                                </h4>
                                <p className='text-gray-600 dark:text-gray-300'>
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className='max-w-3xl mx-auto text-center'>
                        <h3 className='text-2xl font-bold mb-6 dark:text-white'>
                            See How It Works
                        </h3>
                        <div className='relative bg-gray-100 rounded-lg aspect-video flex items-center justify-center overflow-hidden'>
                            <div className='text-center'>
                                <p className='text-gray-500 mb-4'>Demo Video</p>
                                <button className='bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors'>
                                    <FaPlay className='ml-1' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integrations Section */}
            <section
                id='integrations'
                className='py-20'
            >
                <div className='container mx-auto px-4'>
                    <div className='text-center mb-16'>
                        <h2 className='text-3xl font-bold mb-3 dark:text-white'>
                            Integrations
                        </h2>
                        <p className='text-gray-600 dark:text-white'>
                            Seamlessly connect with your favorite platforms
                        </p>
                    </div>

                    <div className='w-full '>
                        <Marquee
                            speed={50}
                            pauseOnHover
                        >
                            {[
                                { Icon: FaAws, name: 'AWS' },
                                { Icon: FaGoogle, name: 'Google Cloud' },
                                { Icon: FaMicrosoft, name: 'Azure' },
                                { Icon: FaStripe, name: 'Stripe' },
                                { Icon: FaPaypal, name: 'PayPal' },
                                { Icon: FaWhatsapp, name: 'WhatsApp API' },
                                { Icon: FaSms, name: 'Twilio' },
                                { Icon: FaSalesforce, name: 'Salesforce' },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className=' flex flex-col items-center justify-center p-6 bg-transparent rounded-lg shadow-md hover:shadow-lg transition-shadow text-center mx-4 w-48 h-48'
                                >
                                    <item.Icon className='text-6xl text-purple-400 mb-3 dark:text-white' />
                                    <span className='font-medium dark:text-white'>
                                        {item.name}
                                    </span>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Products;
