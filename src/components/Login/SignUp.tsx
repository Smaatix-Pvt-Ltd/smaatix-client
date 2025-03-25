import React, { useState } from 'react';

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
                'http://192.168.1.168:8080/api/users',
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
        <div className='border border-gray-200 p-4 rounded-2xl backdrop-blur-2xl shadow-2xl'>
            <h1 className='text-center text-2xl font-bold mb-2'>Sign Up</h1>
            {error && (
                <div className='p-2 bg-red-100 text-red-700 text-sm rounded-md'>
                    {error}
                </div>
            )}
            <form
                onSubmit={handleSubmit}
                className='grid grid-cols-2 max-sm:grid-cols-1 gap-4 '
            >
                <div>
                    <label
                        htmlFor='username'
                        className='block text-sm font-medium text-gray-700'
                    >
                        Username
                    </label>
                    <input
                        type='text'
                        id='username'
                        value={formData.username}
                        onChange={handleChange}
                        className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500'
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor='email'
                        className='block text-sm font-medium text-gray-700'
                    >
                        Email
                    </label>
                    <input
                        type='email'
                        id='email'
                        value={formData.email}
                        onChange={handleChange}
                        className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500'
                        required
                    />
                </div>

                <div>
                    <label
                        htmlFor='password'
                        className='block text-sm font-medium text-gray-700'
                    >
                        Password
                    </label>
                    <input
                        type='password'
                        id='password'
                        value={formData.password}
                        onChange={handleChange}
                        className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500'
                        required
                        minLength={4}
                    />
                </div>

                <div>
                    <label
                        htmlFor='confirmPassword'
                        className='block text-sm font-medium text-gray-700'
                    >
                        Confirm Password
                    </label>
                    <input
                        type='password'
                        id='confirmPassword'
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500'
                        required
                        minLength={4}
                    />
                </div>

                <div>
                    <label
                        htmlFor='phone'
                        className='block text-sm font-medium text-gray-700'
                    >
                        Phone Number (optional)
                    </label>
                    <input
                        type='tel'
                        id='phone'
                        value={formData.phone}
                        onChange={handleChange}
                        className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500'
                    />
                </div>

                <div className='flex items-center'>
                    <input
                        id='terms'
                        name='terms'
                        type='checkbox'
                        checked={formData.terms}
                        onChange={handleChange}
                        className='h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded'
                        required
                    />
                    <label
                        htmlFor='terms'
                        className='ml-2 block text-sm text-gray-700'
                    >
                        I agree to the{' '}
                        <a
                            href='#'
                            className='text-purple-600 hover:text-purple-500'
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
