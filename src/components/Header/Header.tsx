import { useState } from 'react';
import { Button } from '../UI/button';
import Navbar from '../UI/navbar';
import LoginPage from '../Login/Login';
import SignUp from '../Login/SignUp';
// import ThemeToggle from '../UI/ThemeToggle';

const Header = () => {
    const NavItems = [
        { label: 'Products', href: '/products' },
        { label: 'Training', href: '/training' },
        { label: 'Software Solutions', href: '/software-solutions' },
        // { label: 'Corporate Gifting', href: '/services' },
        { label: 'Staffing Solutions', href: '/staffing-solutions' },
        { label: 'Contact', href: '/contact' },
        { label: 'About Us', href: '/about-us' },
        { label: 'Careers', href: '/careers' },

        // { label: 'External', href: 'https://example.com', isExternal: true },
    ];
    const [LoginActive, setLoginActive] = useState(false);
    const [signupActive, setSignupActive] = useState(false);

    const handleLoginClick = () => {
        setLoginActive(!LoginActive);
        setSignupActive(false);
    };

    const handleLoginClose = () => {
        setLoginActive(false);
        setSignupActive(false);
    };

    const handleSignUpClick = () => {
        setSignupActive(!signupActive);
    };

    return (
        <>
            <div className='sticky  top-0 z-50 bg-gradient-to-r from-purple-900 to-zinc-100 dark:bg-gradient-to-r dark:from-black dark:to-[#1b1b1b] flex justify-evenly  shadow-lg drop-shadow-2xl dark:border-b-[1px] dark:border-zinc-300'>
                <div className='w-full lg:pr-10 max-md:pr-2 max-md:ml-10'>
                    <Navbar
                        logo={
                            <a
                                href='/index'
                                className='relative'
                            >
                                <img
                                    src='smaatix-logo.png'
                                    alt='Smaatix'
                                    className='w-36 h-12 relative  rounded-md p-1 z-10'
                                />
                                <div className='absolute dark:bg-white rounded-full h-3 w-3/4  top-[29px] left-9 z-0'></div>
                            </a>
                        }
                        navItems={NavItems}
                        isSticky={true}
                        navItemClassName='text-black dark:text-white'
                    />
                </div>
                <Button
                    className='mt-6 mr-10'
                    onClick={handleLoginClick}
                >
                    Login
                </Button>
            </div>

            {LoginActive && (
                <div className='inset-0 fixed bg-transparent  flex justify-center items-center z-20'>
                    <div
                        className='absolute inset-0 w-screen h-screen z-30'
                        onClick={handleLoginClose}
                    ></div>
                    <div className='z-40'>
                        {signupActive ? (
                            <SignUp />
                        ) : (
                            <LoginPage onSignUpClick={handleSignUpClick} />
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
