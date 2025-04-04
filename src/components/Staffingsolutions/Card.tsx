import React from 'react';
// import { FaCheck } from 'react-icons/fa';

interface CardProps {
    logo?: React.ReactNode;
    heading: string;
    description: string;
    // point1: string;
    // point2: string;
}

const Card: React.FC<CardProps> = ({ logo, heading, description }) => {
    return (
        <div className='flex h-full w-full flex-col rounded-xl border border-[--card-border] bg-[--card-background] p-6 shadow-[var(--card-shadow)] transition-shadow duration-300 hover:shadow-[var(--card-shadow-hover)] hover:scale-[1.02]'>
            <div className='flex flex-grow flex-col'>
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
                    {description}
                </p>
            </div>
        </div>
    );
};

export default Card;
