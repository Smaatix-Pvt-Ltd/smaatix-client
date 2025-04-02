import axios from 'axios';
import { AppContext } from '../../context/AppContext';
import React, { useContext, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { LoginPopUpContext } from '../../context/LoginPopContext';

const PasswordReset: React.FC<{ email: string }> = ({ email }) => {
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const { setShowForgotPassword } = useContext(LoginPopUpContext);
    const { backendUrl } = useContext(AppContext);
    const [newPassword, setNewPassword] = useState('');

    axios.defaults.withCredentials = true;

    const handleInput = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number
    ) => {
        if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {
        if (
            e.key === 'Backspace' &&
            index > 0 &&
            e.currentTarget.value === ''
        ) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const paste = e.clipboardData.getData('text');
        const pasteArray = paste.split('');

        pasteArray.forEach((char, index) => {
            if (index < inputRefs.current.length && inputRefs.current[index]) {
                inputRefs.current[index]!.value = char;
            }
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const otpArray = inputRefs.current.map((input) => input?.value || '');
        const otp = otpArray.join('');
        console.log(otp);

        try {
            const response = await axios.post(
                `${backendUrl}/api/auth/reset-password`,
                {
                    email,
                    otp,
                    newPassword,
                }
            );
            const data = response.data;
            if (!data.success) {
                toast.error(data.message);
                return;
            }
            toast('🎉 OTP Verified! Navigating to login...');
            setShowForgotPassword?.(false);
        } catch (error: any) {
            toast.error(error.response?.data.message || 'An error occurred');
        }
    };

    return (
        <div>
            <form
                className='h-fit bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-white text-center flex flex-col gap-2'
                onSubmit={handleSubmit}
            >
                <p>Enter the 6-digit code sent to your email</p>
                <div className='flex justify-between mb-2'>
                    {Array(6)
                        .fill(0)
                        .map((_, index) => (
                            <input
                                type='text'
                                maxLength={1}
                                key={index}
                                required
                                className='w-12 h-12 bg-[#333A5C] text-xl text-center rounded-md mt-2'
                                ref={(el) => (inputRefs.current[index] = el)}
                                onInput={(e) =>
                                    handleInput(
                                        e as React.ChangeEvent<HTMLInputElement>,
                                        index
                                    )
                                }
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                onPaste={handlePaste}
                            />
                        ))}
                </div>
                <label htmlFor='password'>Enter New Password</label>
                <input
                    type='password'
                    id='password'
                    name='password'
                    value={newPassword}
                    className='h-10 bg-[#333A5C] text-xl text-center rounded-md mb-2'
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
                <button
                    type='submit'
                    className='py-3 px-6 bg-gradient-to-r from-indigo-500 to-indigo-900 rounded-full'
                >
                    Change
                </button>
            </form>
        </div>
    );
};

export default PasswordReset;
