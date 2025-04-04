import React from 'react';
import ThreeDCard from './ThreedCard';

import RoboImg from '../../assets/Images/Robo.jpg';
import Plant from '../../assets/Images/Plant.png';
import Blynk from '../../assets/Images/Blynk.jpg';
import Gym from '../../assets/Images/Gym.png';
import Cravecure from '../../assets/Images/Cravecure.png';

const projects = [
    // ... (keep project data as is, ensure image paths are correct) ...
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
        ],
        url: 'https://github.com/Abhivarun7/Robot_Navigation_Using_Vision',
    },
    {
        name: 'App-Based Plant Disease Detection',
        description:
            'Developed a mobile application that uses image analysis to identify plant diseases accurately',
        image: Plant,
        technologies: ['Python', 'Data Analysis', 'Machine Learning'],
        url: 'https://github.com/Abhivarun7/Plant_disease_detection',
    },
    {
        name: 'Home Automation System',
        description:
            'Designed and implemented a home automation system using NodeMCU connected to WiFi for receiving signals from the Blynk app.',
        image: Blynk,
        technologies: ['Blynk', 'NodeMCU', 'Relay Modules'],
    },
    {
        name: 'Gym Management System',
        description:
            'Created a comprehensive web page for managing gym members, staff, and equipment efficiently.',
        image: Gym,
        technologies: ['HTML', 'CSS', 'Java Script', 'MySQL'],
        url: 'https://www.linkedin.com/posts/abhi-ram-3b9251279_html-css-javascript-activity-7069574199547219968-R1nd?utm_source=share&utm_medium=member_desktop',
    },
    {
        name: 'Food Ordering Website',
        description:
            'An e-commerce platform offering a seamless shopping experience with modern UI and efficient backend integration.',
        image: Cravecure,
        technologies: ['React', 'Node.js', 'Express.js', 'Mongodb'],
        url: 'https://cravecure.netlify.app',
    },
];
const AllProducts = () => {
    return (
        <section
            id='products'
            className='py-24 md:py-32'
        >
            <div className='container mx-auto px-6'>
                <div className='text-center mb-16 animate-fadeInUp'>
                    <h2 className='text-3xl sm:text-4xl font-bold text-foreground mb-4'>
                        Our Products, Your Success
                    </h2>
                    <div className='w-20 h-px bg-border mx-auto mb-6'></div>
                    <p className='max-w-xl mx-auto text-foreground-secondary'>
                        Explore our range of powerful solutions that drive
                        innovation.
                    </p>
                </div>

                {/* CRUCIAL: Assumes 'ThreeDCard' component is themed appropriately */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 w-full max-w-6xl mx-auto'>
                    {projects.map((project, index) => (
                        <div
                            key={project.name + index}
                            className='animate-fadeInUp flex justify-center'
                            style={{
                                animationDelay: `${100 + index * 100}ms`,
                            }}
                        >
                            <ThreeDCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AllProducts;
