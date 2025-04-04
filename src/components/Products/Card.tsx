import React from 'react';
import { FaCheck } from 'react-icons/fa';

interface CardProps {
    logo?: React.ReactNode;
    heading: string;
    description: string;
    point1: string;
    point2: string;
}

const Card: React.FC<CardProps> = ({
    logo,
    heading,
    description,
    point1,
    point2,
}) => {
    return (
        <div className='flex h-full w-full flex-col rounded-xl border border-[--card-border] bg-[--card-background] p-6 shadow-[var(--card-shadow)] transition-shadow duration-300 hover:shadow-[var(--card-shadow-hover)]'>
            <div className='flex flex-grow flex-col'>
                {' '}
                {logo && (
                    <div className='mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[--icon-background]'>
                        {/* Clone element to ensure consistent styling if needed */}
                        {React.cloneElement(logo as React.ReactElement, {
                            className: 'w-6 h-6 text-accent-start',
                        })}
                    </div>
                )}
                {/* Heading */}
                <h3 className='text-xl font-semibold mb-2 text-foreground'>
                    {heading}
                </h3>
                {/* Description */}
                <p className='text-base text-foreground-secondary mb-6 flex-grow'>
                    {' '}
                    {description}
                </p>
            </div>

            <div className='mt-auto'>
                <ul className='space-y-3'>
                    {/* Point 1 */}
                    <li className='flex items-start'>
                        <span className='mr-2 mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent-start text-white'>
                            {' '}
                            <FaCheck className='h-3 w-3' />{' '}
                        </span>
                        {/* Use themed secondary text color */}
                        <span className='text-base text-foreground-secondary'>
                            {point1}
                        </span>
                    </li>
                    {/* Point 2 */}
                    <li className='flex items-start'>
                        {/* Themed Checkmark */}
                        <span className='mr-2 mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent-start text-white'>
                            {' '}
                            <FaCheck className='h-3 w-3' />{' '}
                        </span>
                        {/* Use themed secondary text color */}
                        <span className='text-base text-foreground-secondary'>
                            {point2}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Card;
