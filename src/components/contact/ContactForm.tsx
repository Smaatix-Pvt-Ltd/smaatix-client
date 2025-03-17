import React from 'react';
import { Input } from '../UI/input';
import { Button } from '../UI/button';

const ContactForm = () => {
    return (
        <form
            // onSubmit={handleSubmit}
            className={` h-full lg:w-7/12 p-11 rounded-xl shadow-lg border bg-white dark:bg-zinc-800 dark:text-white`}
        >
            <Input
                label='Your Name'
                type='text'
                id='name'
                variant={'default'}
                placeholder='Enter your name'
                className='w-full h-12 mb-4'
                required={true}
            />
            <span className='bar block relative w-full h-4'></span>
            <Input
                label='Your Email'
                type='email'
                id='name'
                placeholder='Enter your email address'
                variant={'default'}
                className='w-full h-12 '
                required={true}
            />
            <span className='bar block relative w-full h-4'></span>
            <div className='mb-6'>
                <label
                    htmlFor='message'
                    className='block font-bold mb-2 ml-3 text-md'
                >
                    Your Message
                </label>
                <textarea
                    id='message'
                    name='message'
                    // value={formData.message}
                    // onChange={handleChange}
                    // rows='5'
                    className={`w-full px-4 py-3 rounded-lg border  focus:outline-none focus:ring-2 focus:ring-opacity-50 dark:bg-zinc-800`}
                    placeholder='How can we help you?'
                    required
                ></textarea>
            </div>

            <Button
                type='submit'
                variant={'destructive'}
            >
                Send Message
            </Button>
        </form>
    );
};

export default ContactForm;
