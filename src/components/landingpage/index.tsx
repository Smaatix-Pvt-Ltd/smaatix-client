import React, { useState } from 'react';
import Hero from '../Hero/Hero';
import Grow from './Grow.js';
import Stats from './Stats.jsx';
import Contact from '../contact/Contact.tsx';

const Header = () => {
    const [colorTheme, setColorTheme] = useState('purple'); // 'purple', 'teal', 'emerald', 'blue', 'rose'

    return (
        <>
            <section>
                <Hero />
            </section>
            <section>
                <Grow
                    colorTheme={colorTheme}
                    setColorTheme={setColorTheme}
                />
            </section>
            <section>
                <Stats
                    colorTheme={colorTheme}
                    setColorTheme={setColorTheme}
                />
            </section>
            <section>
                <Contact />
            </section>
            <section></section>
        </>
    );
};

export default Header;
