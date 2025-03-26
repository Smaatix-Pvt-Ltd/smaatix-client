import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginFormData } from '../../lib/types';
import { IoArrowForward, IoCloseCircle } from 'react-icons/io5';
import { Button } from '../UI/button';

interface LoginPageProps {
    onSignUpClick: () => void;
    loginCLose: () => void;
}
const LoginPage: React.FC<LoginPageProps> = ({ onSignUpClick, loginCLose }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [resetEmail, setResetEmail] = useState('');
    const [otpSent, setOtpSent] = useState(false); // Track if OTP has been sent

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            identifier: '',
            password: '',
        },
    });

    const onSubmit = async (data: LoginFormData) => {
        setIsSubmitting(true);
        setErrorMessage(null); // Clear any previous errors

        try {
            // Simulate API call
            console.log('Login Data:', data); // For demonstratio
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/users/login`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                }
            );

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Login failed');
            }

            //  Successful login (replace with your actual redirect or state update)
            console.log('Login successful!');
            reset(); // Reset the form
            loginCLose();
            // window.location.href = '/dashboard'; // Redirect to dashboard or other page
        } catch (error: any) {
            console.error('Login error:', error);
            setErrorMessage(error.message || 'An error occurred during login.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleForgotPasswordClick = () => {
        setShowForgotPassword(true);
    };

    const handleSendOTP = async () => {
        // Simulate sending OTP (replace with your actual API call)
        try {
            // const response = await fetch('/api/forgot-password', {
            //   method: 'POST',
            //   headers: { 'Content-Type': 'application/json' },
            //   body: JSON.stringify({ email: resetEmail }),
            // });

            // if (!response.ok) {
            //   const errorData = await response.json();
            //   throw new Error(errorData.message || 'Failed to send OTP');
            // }

            console.log('OTP sent to:', resetEmail);
            setOtpSent(true); // Indicate that OTP has been sent
        } catch (error: any) {
            console.error('Failed to send OTP:', error);
            setErrorMessage(error.message || 'Failed to send OTP.');
        }
    };

    return (
        <div className='bg-white/70 dark:bg-gray-800/40 backdrop-blur-lg shadow-2xl shadow-slate-800  rounded-3xl sm:mx-10  px-8 pt-6 pb-8 mb-4 w-full max-w-md z-50'>
            <h2 className='text-2xl font-bold  mb-5 text-center'>Login</h2>

            {errorMessage && (
                <div
                    className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4'
                    role='alert'
                >
                    <strong className='font-bold'>Error!</strong>
                    <span className='block sm:inline'>{errorMessage}</span>
                </div>
            )}

            {!showForgotPassword ? (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mb-4'>
                        <label
                            className='block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2'
                            htmlFor='identifier'
                        >
                            Email, Phone Number or Username
                        </label>
                        <input
                            className={`shadow bg-transparent border rounded w-full py-2 px-3 dark:text-gray-100 leading-tight placeholder:text-gray-600 dark:placeholder:text-gray-200 focus:outline-none focus:shadow-outline ${
                                errors.identifier ? 'border-red-500' : ''
                            }`}
                            id='identifier'
                            type='text'
                            placeholder='Enter your email, phone or username'
                            {...register('identifier')}
                        />
                        {errors.identifier && (
                            <p className='text-red-500 text-xs italic'>
                                {errors.identifier.message}
                            </p>
                        )}
                    </div>
                    <div className='mb-6'>
                        <label
                            className='block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2'
                            htmlFor='password'
                        >
                            Password
                        </label>
                        <input
                            className={`shadow bg-transparent dark:text-white appearance-none border rounded w-full py-2 px-3 text-gray-700 placeholder:text-gray-600 dark:placeholder:text-white mb-3 leading-tight focus:outline-none focus:shadow-outline ${
                                errors.password ? 'border-red-500' : ''
                            }`}
                            id='password'
                            type='password'
                            placeholder='Enter your password'
                            {...register('password')}
                        />
                        {errors.password && (
                            <p className='text-red-500 text-xs italic'>
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {/* Replace with a real reCAPTCHA component */}
                    {/* <div className='flex items-center justify-between mb-4'>
                        <label className='flex items-center'>
                            <input
                                type='checkbox'
                                className='mr-2'
                            />
                            <span className='text-sm text-gray-700'>
                                I am not a robot
                            </span>
                        </label>
                    </div> */}

                    <div className='flex items-center justify-between'>
                        <Button
                            variant={'slide'}
                            slideIcon={<IoArrowForward />}
                            className='bg-transparent  text-black bg-gray-400 dark:bg-gray-600 dark:text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline'
                            type='submit'
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Logging in...' : 'Login'}
                        </Button>
                        <Button
                            variant={'link'}
                            className=' font-medium text-sm text-blue-800 dark:text-blue-300 hover:text-blue-800'
                            onClick={handleForgotPasswordClick}
                        >
                            Forgot Password?
                        </Button>
                    </div>

                    {/* <div className='mt-4 text-center'>
                        <button
                            type='button'
                            className='bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                        >
                            Login with Google
                        </button>
                    </div> */}
                </form>
            ) : (
                <div>
                    {!otpSent ? (
                        <div>
                            <label
                                className='block text-gray-700 text-sm font-bold mb-2'
                                htmlFor='reset-email'
                            >
                                Enter your email:
                            </label>
                            <input
                                className='shadow  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id='reset-email'
                                type='email'
                                placeholder='Your email'
                                value={resetEmail}
                                onChange={(e) => setResetEmail(e.target.value)}
                            />
                            <button
                                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4'
                                onClick={handleSendOTP}
                            >
                                Send OTP
                            </button>
                        </div>
                    ) : (
                        <div>
                            <p>
                                OTP sent to your email. Please check your inbox.
                            </p>
                            {/* You would add an input field here to enter the OTP and a button to verify it */}
                        </div>
                    )}
                </div>
            )}
            <span className='block text-center mt-2 dark:text-gray-200'>
                Don't have an account yet?{' '}
                <Button
                    variant={'link'}
                    className='pl-0 text-red-600 font-bold'
                    onClick={onSignUpClick}
                >
                    SignUp
                </Button>
            </span>
        </div>
    );
};

export default LoginPage;
