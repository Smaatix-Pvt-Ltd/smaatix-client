import React, { useState } from 'react';
import Hero from '../Hero/Hero';
import Grow from './Grow.js';
import Stats from './Stats.js';
import Contact from '../contact/Contact.tsx';
import ScrollToTop from '../UI/scrollToTop.tsx';

const Header = () => {
    const [colorTheme, setColorTheme] = useState('purple'); // 'purple', 'teal', 'emerald', 'blue', 'rose'

    return (
        <>
            <Hero />
            <section
                id='grow'
                className='pt-10'
            >
                <Grow />
            </section>

            <Stats />

            <Contact />
            <ScrollToTop />
        </>
    );
};

export default Header;
