import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
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
                    className='fixed h-fit w-fit bottom-10 right-5 z-50'
                >
                    <FaArrowUp className='scroll-indicator animate-subtlePulse text-2xl' />
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;
