import React, { useContext, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AccountVerifyContext } from '../../context/AccountVerifyContext';

const AccountVerify = () => {
    const inputRefs = useRef([]);
    const navigate = useNavigate();
    const { backendUrl, getUserData, isLoggedin, userData } =
        useContext(AppContext);
    const { handleVerifyAccountClose } = useContext(AccountVerifyContext);
    axios.defaults.withCredentials = true;

    const handleInput = (e, index) => {
        if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && index > 0 && e.target.value === '') {
            inputRefs.current[index - 1].focus();
        }
    };

    const handlePaste = (e) => {
        const paste = e.clipboardData.getData('text');
        const pasteArray = paste.split('');
        pasteArray.forEach((char, index) => {
            if (index < inputRefs.current.length) {
                inputRefs.current[index].value = char;
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const otpArray = inputRefs.current.map((e) => e.value);
        const otp = otpArray.join('');
        console.log(otp);
        try {
            const response = await axios.post(
                `${backendUrl}/api/auth/verify-account`,
                {
                    otp,
                }
            );
            const data = await response.data;
            if (!data.success) {
                toast.error(data.message);
                return;
            } else {
                toast.success(data.message);
                console.log('🎉 OTP Verified! Navigating to login...');
                handleVerifyAccountClose();
                getUserData();
            }
        } catch (error) {
            const response = error.response;
            toast.error(response?.data.message);
        }
    };
    useEffect(() => {
        console.log(isLoggedin);
        console.log(userData);
        isLoggedin && userData && userData.isVerified && navigate('/');
    }, [isLoggedin, userData]);
    return (
        <section className='absolute inset-0 flex items-center justify-center min-h-screen bg-transparent'>
            <form className='fixed h-fit bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-white text-center z-50'>
                <h1>Account Verification</h1>
                <p>Enter the 6-digit code sent to your email</p>
                <div className='flex justify-between mb-8'>
                    {Array(6)
                        .fill(0)
                        .map((_, index) => {
                            return (
                                <input
                                    type='text'
                                    maxLength={1}
                                    key={index}
                                    required
                                    className='w-12 h-12 bg-[#333A5C] text-xl text-center rounded-md mt-10 '
                                    ref={(e) => (inputRefs.current[index] = e)}
                                    onInput={(e) => {
                                        handleInput(e, index);
                                    }}
                                    onKeyDown={(e) => {
                                        handleKeyDown(e, index);
                                    }}
                                    onPaste={(e) => {
                                        handlePaste(e);
                                    }}
                                />
                            );
                        })}
                </div>
                <button
                    className='py-3 px-6 bg-gradient-to-r from-indigo-500 to-indigo-900 rounded-full'
                    onClick={handleSubmit}
                >
                    Verify
                </button>
            </form>
        </section>
    );
};

export default AccountVerify;
