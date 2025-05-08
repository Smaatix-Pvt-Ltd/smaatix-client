import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginFormData } from '../../lib/types';
import { IoArrowForward, IoCloseCircle } from 'react-icons/io5';
import { Button } from '../UI/button';
import { AppContext } from '../../context/AppContext';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LoginPopUpContext } from '../../context/LoginPopContext';
import PasswordReset from './PasswordReset';

const LoginPage = () => {
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [resetEmail, setResetEmail] = useState('');
    const [otpSent, setOtpSent] = useState(false); // Track if OTP has been sent
    const { backendUrl, setIsLoggedin, getUserData, setUserData } = useContext(AppContext);

    const {
        handleSignUpClick: onSignUpClick,
        handleLoginClose,
        handleForgotPasswordClick,
        showForgotPassword,
    } = useContext(LoginPopUpContext);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });
    useEffect(() => {
        console.log(showForgotPassword);
    }, [showForgotPassword]);

    const saveLocationData = async (userData, locationData) => {
        try {
            // Make sure to send the userId directly in the body
            const dataToSend = {
                userId: userData.id,
                ...locationData
            };
            
            console.log('Sending location data:', dataToSend);
            
            const response = await axios.post(`${backendUrl}/api/locationdata/add`, dataToSend, {
                withCredentials: true,
            });
            
            console.log('Location data saved:', response.data);
        } catch (error) {
            console.error('Error saving location data:', error);
            // Don't show toast to user as this is a background operation
        }
    };

    const onSubmit = async (data: LoginFormData) => {
        setIsSubmitting(true);
        setErrorMessage(null);
        
        try {
          const response = await axios.post(`${backendUrl}/api/auth/login`, data, {
            withCredentials: true,
          });
          
          console.log('Login response:', response);
          
          if (response.status === 200) {
            if (setIsLoggedin) {
              setIsLoggedin(true);
            }
      
            const userData = response.data.user;
            setUserData(userData);
            
            // Request user location permission
            if (navigator.geolocation) {
              try {
                toast.info("Please allow location access to enhance your experience.");
                navigator.geolocation.getCurrentPosition(
                  async (position) => {
                    // User allowed location access
                    const { latitude, longitude } = position.coords;
                    console.log('User precise location:', { latitude, longitude });
                    
                    // You can still get additional info from IP-based service
                    try {
                      const locationResponse = await fetch('https://ipapi.co/json/');
                      const locationData = await locationResponse.json();
                      console.log('Additional location details:', locationData);
                      
                      // Save complete location data to backend
                      await saveLocationData(userData, {
                        ...locationData,
                        latitude, 
                        longitude
                      });
                    } catch (ipError) {
                      console.error('Error fetching IP location:', ipError);
                      
                      // Save just coordinates if IP lookup fails
                      await saveLocationData(userData, {
                        latitude,
                        longitude
                      });
                    }
                  },
                  async (error) => {
                    // User denied location access or error occurred
                    console.error('Geolocation permission error:', error.message);
                    
                    // Fallback to IP-based location
                    try {
                      const locationResponse = await fetch('https://ipapi.co/json/');
                      const locationData = await locationResponse.json();
                      console.log('Fallback location details:', locationData);
                      
                      // Save IP-based location data
                      await saveLocationData(userData, locationData);
                    } catch (ipError) {
                      console.error('Fallback location error:', ipError);
                    }
                  },
                  { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
                );
              } catch (geoError) {
                console.error('Geolocation API error:', geoError);
              }
            } else {
              console.log('Geolocation is not supported by this browser');
              // Fallback to IP-based location
              try {
                const locationResponse = await fetch('https://ipapi.co/json/');
                const locationData = await locationResponse.json();
                console.log('IP-based location details:', locationData);
                
                // Save IP-based location data
                await saveLocationData(userData, locationData);
              } catch (ipError) {
                console.error('Error fetching IP location:', ipError);
              }
            }
            
            toast(response.data.message);
            navigate('/');
          } else {
            toast.error(response.data.message);
          }
          reset(); // Reset the form
          if (handleLoginClose) {
            handleLoginClose();
          }
        } catch (error: any) {
          console.error('Login error:', error);
          
          if (error.response) {
            // Handle server response errors
            const message = error.response.data?.message || 'Login failed';
            toast.error(message);
            setErrorMessage(message);
          } else {
            // Handle network/other errors
            toast.error('Network error. Please try again.');
            setErrorMessage('Network error. Please try again.');
          }
        } finally {
          setIsSubmitting(false);
        }
      };


    const handleSendOTP = async () => {
        // Simulate sending OTP (replace with your actual API call)
        try {
            const response = await fetch(
                `${backendUrl}/api/auth/send-reset-otp`,
                {
                    method: 'POST',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email: resetEmail }),
                }
            );

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to send OTP');
            }

            toast.success('OTP sent to your email.');
            setOtpSent(true); // Indicate that OTP has been sent
        } catch (error: any) {
            toast.error('Failed to send OTP:');
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
                            Email
                        </label>
                        <input
                            className={`shadow bg-transparent border rounded w-full py-2 px-3 dark:text-gray-100 leading-tight placeholder:text-gray-600 dark:placeholder:text-gray-200 focus:outline-none focus:shadow-outline ${
                                errors.email ? 'border-red-500' : ''
                            }`}
                            id='identifier'
                            type='text'
                            placeholder='Enter your email'
                            {...register('email')}
                        />
                        {errors.email && (
                            <p className='text-red-500 text-xs italic'>
                                {errors.email.message}
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

                    <div className='flex items-center justify-between'>
                        <Button
                            variant={'slide'}
                            slideIcon={<IoArrowForward />}
                            className='bg-transparent text-black bg-gray-400 dark:bg-gray-600 dark:text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline'
                            type='submit'
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Logging in...' : 'Login'}
                        </Button>
                        <Button
                            variant={'link'}
                            className='font-medium text-sm text-blue-800 dark:text-blue-300 hover:text-blue-800'
                            onClick={handleForgotPasswordClick}
                        >
                            Forgot Password?
                        </Button>
                    </div>
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
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
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
                            <PasswordReset email={resetEmail} />
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