import React, { useEffect, useState } from 'react';
import { IoChevronUpCircleSharp } from 'react-icons/io5';

const ScrollToTop = () => {
    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setBackToTop(true);
            } else {
                setBackToTop(false);
            }
        });
    }, []);

    const handleScrollTopClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            {backToTop && (
                <button
                    onClick={handleScrollTopClick}
                    className='fixed h-fit w-fit bg-white rounded-full bottom-10 right-5 text-purple-600 shadow-md shadow-purple-500 z-50'
                >
                    <IoChevronUpCircleSharp
                        size={40}
                        strokeWidth={2}
                    />
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;
