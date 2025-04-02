import { Children, useContext, useState } from 'react';
import { Button } from '../UI/button';
import Navbar from '../UI/navbar';
import { AppContext } from '../../context/AppContext';
import { IoArrowForward } from 'react-icons/io5';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LoginPopUpContext } from '../../context/LoginPopContext';
import LoginPopup from '../Login/LoginPopup';
import {
    AccountVerifyContext,
} from '../../context/AccountVerifyContext';
import AccountVerify from '../accountVerification/accountVerify';
// import ThemeToggle from '../UI/ThemeToggle';

const Header = () => {
    const { userData, setIsLoggedin, setUserData, backendUrl } = useContext(AppContext);

    const {
        verifyAccountPopup,
        setVerifyAccountPopup,
        handleVerifyAccountOpen,
        handleVerifyAccountClose,
    } = useContext(AccountVerifyContext);

    const { handleLoginClick, setPopup, popup, handleLoginClose } =
        useContext(LoginPopUpContext);

    const NavItems = [
        { label: 'Home', href: '/index' },
        { label: 'Training', href: '/training' },
        { 
            label: 'Solutions',
            children: [
                { label: 'Software Solutions', href: '/software-solutions' },
                { label: 'Staffing Solutions', href: '/staffing-solutions' }
            ]
        },
        { label: 'Products', href: '/products' },
        { label: 'Contact', href: '/contact' },
        { label: 'Careers', href: '/careers' },
        { label: 'About Us', href: '/about-us' }
    ];
    

    const Logout = async () => {
        try {
            axios.defaults.withCredentials = true;
            const response = await axios.post(`${backendUrl}/api/auth/logout`);
            if (response.status === 200) {
                toast.success('Logged out successfully');
                setIsLoggedin(false);
                setUserData(false);
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    return (
        <>
            <div className='sticky  top-0 z-50  flex justify-evenly backdrop-blur-3xl  shadow-lg drop-shadow-2xl dark:border-b-[1px] dark:border-zinc-300'>
                <div className='w-full lg:pr-10 max-ms:pr-2 md:ml-10'>
                    <Navbar
                        logo={
                            <a
                                href='/index'
                                className='relative'
                            >
                                <img
                                    src='smaatix-logo.png'
                                    alt='Smaatix'
                                    className='w-36 h-12 relative  rounded-md p-1 z-10  '
                                    width='100'
                                    height='100'
                                />
                                <div className='absolute dark:bg-white rounded-full h-3 w-3/4  top-[29px] left-9 z-0'></div>
                            </a>
                        }
                        navItems={NavItems}
                        isSticky={true}
                        navItemClassName='text-black dark:text-white'
                    />
                </div>
                {userData ? (
                    <div className='group w-20 h-10 flex justify-center items-center rounded-full bg-black text-yellow-300 relative mt-5 mx-2 '>
                        {userData?.name[0].toUpperCase()}
                        <div className='absolute hidden group-hover:block group-active:block top-0 right-0 z-10 min-w-fit w-28 text-black pt-10 rounded-lg'>
                            <ul className='list-none w-fit m-0 p-2 bg-gray-100 text-sm'>
                                {userData.isVerified ? (
                                    ''
                                ) : (
                                    <li
                                        className='min-w-fit text-center  hover:bg-gray-200 cursor-pointer py-1 px-2'
                                        onClick={handleVerifyAccountOpen}
                                    >
                                        Verify Email
                                    </li>
                                )}
                                <li
                                    className='min-w-fit text-center  hover:bg-gray-200 cursor-pointer py-1 px-2'
                                    onClick={Logout}
                                >
                                    Logout
                                </li>
                            </ul>
                        </div>
                    </div>
                ) : (
                    <Button
                        className='btn mt-5 mx-2  h-10 group flex items-center gap-1 border border-gray-500 rounded-full  text-gray-800 py-1 transition-all duration-300 cursor-pointer '
                        onClick={handleLoginClick}
                    >
                        Login
                        <IoArrowForward className='group-hover:translate-x-1' />
                    </Button>
                )}
            </div>
            <LoginPopup />
            {verifyAccountPopup && <AccountVerify />}
        </>
    );
};

export default Header;
