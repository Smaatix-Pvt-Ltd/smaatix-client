import React from 'react';

const CardLinks = ({
    icon,
    itemLink,
    title,
    description,
    isMore,
}: {
    icon: any;
    itemLink?: string;
    title: string;
    description: string;
    isMore?: boolean;
}) => {
    return (
        <div className='relative w-full  md:p-10 max-h-[250px] flex flex-col gap-4 max-md:w-2/3 max-md:mx-auto overflow-hidden group hover:-translate-x-1 hover:-translate-y-2 transition-transform duration-300'>
            <div className='bg-[--icon-background] w-fit rounded-xl  p-2  text-accent-start'>
                {icon}
            </div>
            <a href={itemLink || '#'}>
                <span className='absolute w-full inset-0 cursor-pointer  z-0'></span>
                <p className='text-xl font-semibold'>{title}</p>
            </a>
            <p className='text-gray-500'>{description}</p>
            {/* Button with theme color */}
            {isMore && (
                <div className='inline-flex items-center justify-start '>
                    Learn More
                    <svg
                        className='w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300'
                        fill='none'
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M9 5l7 7-7 7'
                        ></path>
                    </svg>
                </div>
            )}
        </div>
    );
};

export default CardLinks;
