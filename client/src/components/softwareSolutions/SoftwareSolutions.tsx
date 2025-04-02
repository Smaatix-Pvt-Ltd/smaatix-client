import React from 'react';
import CardLinks from '../UI/cardLinks';
import {
    IoSettingsOutline,
    IoBagHandleSharp,
    IoColorPalette,
    IoDesktop,
    IoSparkles,
} from 'react-icons/io5';
const SoftwareSolutions = () => {
    const CardItems = [
        {
            icon: <IoSettingsOutline />,
            title: 'Custom Development',
            description:
                'we can design your custom requirement as software application',
        },
        {
            icon: <IoSparkles />,
            title: 'Responsive Development',
            description:
                'we can develop progressive web application for your requirement',
        },
        {
            icon: <IoColorPalette />,
            title: 'Design Strategy',
            description:
                'we can help in designing based on the physiology / habit for ROI growth ',
        },
        {
            icon: <IoDesktop />,
            title: 'SAP Development',
            description:
                'We have end to end SAP development services expertise in SAP Implementation, Consulting and SAP Customization. ',
        },
        {
            icon: <IoBagHandleSharp />,
            title: 'E Commerce',
            description:
                'we help in development of E-commerce for your product or service',
        },
    ];
    return (
        <main className='flex flex-col justify-start items-center gap-8 p-10 min-h-screen dark:text-white'>
            <div className='absolute left-10 top-20 w-96 h-96 rounded-full bg-gradient-to-br from-purple-800 to-purple-300 blur-3xl opacity-900 animate-blob animation-delay-2000 '></div>
            <h3 className='text-md font-normal max-md:text-xl z-10'>
                A Step-By-Step Roadmap To Success In Software Development
            </h3>
            <h1 className='text-5xl font-bold max-md:text-2xl z-10 font-serif mb-10 text-purple-900 stroke-2 stroke-slate-600 '>
                One-Stop Software Solution
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {CardItems.map((item) => {
                    return (
                        <div key={item.title}>
                            <CardLinks
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                                isMore={false}
                            />
                        </div>
                    );
                })}
            </div>
        </main>
    );
};

export default SoftwareSolutions;
