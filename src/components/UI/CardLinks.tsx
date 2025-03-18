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
        <div
            className='relative bg-white p-10 py-14 max-h-[250px] flex flex-col gap-4 bg-white/50 max-md:w-2/3 max-md:mx-auto
        dark:bg-black/50 rounded-xl shadow-lg rounded-t-xl rounded-bl-[50px] border border-black hover:shadow-xltransition-shadow  overflow-hidden group hover:-translate-x-1 hover:-translate-y-2 transition-transform duration-300'
        >
            <div className='bg-slate-500  w-fit rounded-xl dark:bg-zinc-800  p-2 border-[1px] border-slate-600 dark:border-zinc-900'>
                {icon}
            </div>
            <a href={itemLink || '#'}>
                <span className='absolute inset-0 cursor-pointer z-0'></span>
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
