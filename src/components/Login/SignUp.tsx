import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema, SignUpFormData } from '../../lib/types';
import { IoArrowForward } from 'react-icons/io5';
import { Button } from '../UI/button';
import { AppContext } from '../../context/AppContext';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LoginPopUpContext } from '../../context/LoginPopContext';

const SignUpPage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { backendUrl, setIsLoggedin, getUserData } = useContext(AppContext);
    const { handleLoginClick, handleLoginClose } =
        useContext(LoginPopUpContext);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        watch,
    } = useForm<SignUpFormData>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            name: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    });

    const password = watch('password');
    const confirmPassword = watch('confirmPassword');

    const onSubmit = async (data: SignUpFormData) => {
        setIsSubmitting(true);

        const { confirmPassword, ...requestData } = data;

        if (data.password.length < 6) {
            toast.error('Password must be at least 6 characters long.');
            setIsSubmitting(false);
            return;
        }

        if (data.password !== confirmPassword) {
            toast.error('Passwords do not match.');
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await axios.post(
                `${backendUrl}/api/auth/register`,
                requestData
            );
            console.log(response);

            if (response.status === 201) {
                toast.success(response.data.message);
                setIsLoggedin?.(true);
                reset();
                getUserData?.();
                if (handleLoginClose) {
                    handleLoginClose();
                }
            } else {
                toast.error(response.data.message);
            }
        } catch (error: any) {
            toast.error(error.response?.data.message || 'Sign up failed.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className='bg-white/70 dark:bg-gray-800/40 backdrop-blur-lg shadow-2xl shadow-slate-800 rounded-3xl sm:mx-10 px-8 pt-6 pb-8 mb-4 w-full max-w-md z-50'>
            <h2 className='text-2xl font-bold mb-5 text-center'>Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-4'>
                    <label className='block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2'>
                        Name
                    </label>
                    <input
                        className='shadow bg-transparent border rounded w-full py-2 px-3 dark:text-gray-100'
                        type='text'
                        placeholder='Enter your name'
                        {...register('name')}
                    />
                    {errors.name && (
                        <p className='text-red-500 text-xs italic'>
                            {errors.name.message}
                        </p>
                    )}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2'>
                        Username
                    </label>
                    <input
                        className='shadow bg-transparent border rounded w-full py-2 px-3 dark:text-gray-100'
                        type='text'
                        placeholder='Choose a username'
                        {...register('username')}
                    />
                    {errors.username && (
                        <p className='text-red-500 text-xs italic'>
                            {errors.username.message}
                        </p>
                    )}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2'>
                        Email
                    </label>
                    <input
                        className='shadow bg-transparent border rounded w-full py-2 px-3 dark:text-gray-100'
                        type='email'
                        placeholder='Enter your email'
                        {...register('email')}
                    />
                    {errors.email && (
                        <p className='text-red-500 text-xs italic'>
                            {errors.email.message}
                        </p>
                    )}
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2'>
                        Password
                    </label>
                    <input
                        className='shadow bg-transparent border rounded w-full py-2 px-3 dark:text-gray-100'
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
                <div className='mb-6'>
                    <label className='block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2'>
                        Confirm Password
                    </label>
                    <input
                        className='shadow bg-transparent border rounded w-full py-2 px-3 dark:text-gray-100'
                        type='password'
                        placeholder='Confirm your password'
                        {...register('confirmPassword')}
                    />
                    {password !== confirmPassword && (
                        <p className='text-red-500 text-xs italic'>
                            Passwords do not match.
                        </p>
                    )}
                </div>
                <div className='flex items-center justify-between'>
                    <Button
                        variant={'slide'}
                        slideIcon={<IoArrowForward />}
                        className='bg-gray-400 dark:bg-gray-600 dark:text-white font-bold py-2 px-4 rounded-2xl focus:outline-none focus:shadow-outline'
                        type='submit'
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                    </Button>
                </div>
            </form>
            <span className='block text-center mt-2 dark:text-gray-200'>
                Already have an account?{' '}
                <Button
                    variant={'link'}
                    className='pl-0 text-blue-600 font-bold'
                    onClick={handleLoginClick}
                >
                    Login
                </Button>
            </span>
        </div>
    );
};

export default SignUpPage;
