import React, { useState } from 'react';

interface ImportMetaEnv {
    VITE_API_URL: string;
}

interface ImportMeta {
    env: ImportMetaEnv;
}

interface SignupProps {
    onSuccess?: (userData: any) => void;
}

const Signup: React.FC<SignupProps> = ({ onSuccess }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        terms: false,
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submission data:', formData); // Debug log

        if (!formData.terms) {
            setError('You must accept the terms and conditions');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (formData.password.length < 4) {
            setError('Password must be at least 4 characters');
            return;
        }

        setIsLoading(true);
        setError('');

        try {
            // Match the exact structure from your curl command
            const payload = {
                username: formData.username,
                userPassword: formData.password,
                userEmail: formData.email,
                userPhone: formData.phone || 'string',
            };

            console.log('Sending payload:', payload); // Debug log

            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/users/signup`,
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json', // Match the accept header from curl
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                }
            );

            console.log('Response status:', response.status); // Debug log

            // Handle different response scenarios
            if (!response.ok) {
                // Try to get the error message from the response
                const textResponse = await response.text();
                console.log('Error response:', textResponse); // Debug log

                let errorMessage = `Registration failed (${response.status})`;
                try {
                    // Only try to parse as JSON if it looks like JSON
                    if (textResponse.trim().startsWith('{')) {
                        const errorData = JSON.parse(textResponse);
                        errorMessage = errorData.message || errorMessage;
                    }
                } catch (e) {
                    console.error('Error parsing error response:', e);
                }
                throw new Error(errorMessage);
            } else {
                console.log('Registration successful'); // Debug
                formData.username = '';
                formData.email = '';
                formData.password = '';
                formData.confirmPassword = '';
                formData.phone = '';
                formData.terms = false;
            }

            // Handle successful response
            const contentType = response.headers.get('content-type');
            let data = {};

            // Only try to parse JSON if the response has JSON content
            if (contentType && contentType.includes('application/json')) {
                const textResponse = await response.text();
                if (textResponse) {
                    data = JSON.parse(textResponse);
                }
            } else {
                console.log('Non-JSON response received'); // Debug log
            }

            console.log('Success data:', data); // Debug log

            if (onSuccess) onSuccess(data);
        } catch (err: any) {
            console.error('Registration error:', err); // Debug log

            if (
                err.name === 'TypeError' &&
                err.message.includes('Failed to fetch')
            ) {
                setError(
                    'Cannot connect to server. Please check your network connection.'
                );
            } else {
                setError(
                    err.message || 'Registration failed. Please try again.'
                );
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='border border-gray-200 p-4 rounded-2xl bg-white/20 dark:bg-black/40 backdrop-blur-2xl shadow-2xl'>
            <h1 className='text-center text-2xl font-bold mb-2'>Sign Up</h1>
            {error && (
                <div className='p-2 bg-red-100 text-red-700 text-sm rounded-md'>
                    {error}
                </div>
            )}
            <form
                onSubmit={handleSubmit}
                className=''
            >
                <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-4 mb-4'>
                    <div>
                        <label
                            htmlFor='username'
                            className='block text-sm font-medium dark:text-white text-gray-700'
                        >
                            Username
                        </label>
                        <input
                            type='text'
                            id='username'
                            value={formData.username}
                            onChange={handleChange}
                            placeholder='Enter your username'
                            className='mt-1 block w-full px-3 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 placeholder:text-white dark:text-white'
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor='email'
                            className='block text-sm font-medium dark:text-white text-gray-700'
                        >
                            Email
                        </label>
                        <input
                            type='email'
                            id='email'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Enter your email'
                            className='mt-1 block w-full px-3 py-2 bg-transparent border border-gray-300 dark:text-white rounded-md shadow-sm focus:outline-none placeholder:dark:text-white focus:ring-purple-500 focus:border-purple-500'
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor='password'
                            className='block text-sm font-medium text-gray-700 dark:text-white'
                        >
                            Password
                        </label>
                        <input
                            type='password'
                            id='password'
                            value={formData.password}
                            onChange={handleChange}
                            placeholder='Enter your password'
                            className='mt-1 block w-full px-3 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:text-white placeholder:dark:text-white'
                            required
                            minLength={4}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor='confirmPassword'
                            className='block text-sm font-medium text-gray-700 dark:text-white'
                        >
                            Confirm Password
                        </label>
                        <input
                            type='password'
                            id='confirmPassword'
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder='Confirm your password'
                            className='mt-1 block w-full px-3 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:text-white placeholder:dark:text-white'
                            required
                            minLength={4}
                        />
                    </div>

                    <div>
                        <label
                            htmlFor='phone'
                            className='block text-sm font-medium text-gray-700 dark:text-white'
                        >
                            Phone Number (optional)
                        </label>
                        <input
                            type='tel'
                            id='phone'
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder='Enter your phone number'
                            className='mt-1 block w-full px-3 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 dark:text-white placeholder:dark:text-white'
                        />
                    </div>
                </div>

                <div className='flex items-center m-2 '>
                    <input
                        id='terms'
                        name='terms'
                        type='checkbox'
                        checked={formData.terms}
                        onChange={handleChange}
                        className='h-4 w-4 bg-transparent text-purple-600 focus:ring-purple-500 border-gray-300 rounded-lg active:bg-gray-700'
                        required
                    />
                    <label
                        htmlFor='terms'
                        className='ml-2 block text-sm text-gray-700 dark:text-white'
                    >
                        I agree to the{' '}
                        <a
                            href='#'
                            className='text-purple-600 hover:text-purple-500 dark:text-purple-300'
                        >
                            Terms and Conditions
                        </a>
                    </label>
                </div>

                <button
                    type='submit'
                    disabled={isLoading}
                    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${
                        isLoading ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                >
                    {isLoading ? 'Creating account...' : 'Create Account'}
                </button>
            </form>
        </div>
    );
};

export default Signup;
