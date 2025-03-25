import React from 'react';
import { Input } from '../UI/input';
import { Button } from '../UI/button';
import { FieldValues, useForm } from 'react-hook-form';
import { contactFormSchema, TcontactFormSchema } from '../../lib/types';
import { zodResolver } from '@hookform/resolvers/zod';

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        setError,
    } = useForm<TcontactFormSchema>({
        resolver: zodResolver(contactFormSchema),
    });

    const onSubmit = async (data: FieldValues) => {
        console.log(data);

        await new Promise((resolve) => {
            setTimeout(resolve, 1000);
        });
        // const response = await fetch('route', {
        //     method: 'POST',
        //     body: JSON.stringify(data),
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // });
        // const responseData = await response.json();
        // if (!response.ok) {
        //     alert('Submitting failed!');
        //     return;
        // }
        // if (responseData.error) {
        //     const errors = responseData.error;
        //     if (errors.name) {
        //         setError('name', {
        //             type: 'server',
        //             message: errors.name,
        //         });
        //     } else if (errors.phone) {
        //         setError('phone', {
        //             type: 'server',
        //             message: errors.phone,
        //         });
        //     }
        //     if (errors.email) {
        //         setError('email', {
        //             type: 'server',
        //             message: errors.email,
        //         });
        //     } else {
        //         alert('Submitting failed!');
        //     }
        // }
        // if (response.ok) {
        //     alert('Submitted successfully!');
        //     reset();
        // }
        reset();
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={` h-full max-h-[500px] lg:w-7/12 p-11 flex flex-col flex-nowrap rounded-xl gap-1 items-start justify-startshadow-lg border bg-white dark:bg-zinc-800 dark:text-white`}
        >
            <Input
                {...register('name')}
                label='Your Name'
                type='text'
                id='name'
                variant={'default'}
                placeholder='Enter your name'
                className='w-full h-12 mb-4'
            />
            {errors.name && <div>{`Error: ${errors.name.message}`}</div>}
            <span className='bar block relative w-full h-4'></span>
            <Input
                {...register('phone')}
                label='Your Phone Number'
                type='tel'
                id='phone'
                variant={'default'}
                placeholder='Enter your name'
                className='w-full h-12 mb-4'
            />
            {errors.phone && <div>{`Error: ${errors.phone.message}`}</div>}
            <span className='bar block relative w-full h-4'></span>
            <Input
                {...register('email')}
                label='Your Email'
                type='email'
                id='name'
                placeholder='Enter your email address'
                variant={'default'}
                className='w-full h-12 '
                required={true}
            />
            {errors.email && <div>{`Error: ${errors.email.message}`}</div>}
            <span className='bar block relative w-full h-4'></span>
            <div className='mb-6'>
                <label
                    htmlFor='message'
                    className='block font-bold  ml-3 text-md'
                >
                    Your Message
                </label>
                <textarea
                    {...register('message')}
                    id='message'
                    name='message'
                    className={`w-full px-4 py-3 rounded-lg border  focus:outline-none focus:ring-2 focus:ring-opacity-50 dark:bg-zinc-800`}
                    placeholder='How can we help you?'
                    required
                ></textarea>
            </div>
            {errors.message && <div>{`Error: ${errors.message.message}`}</div>}
            <Button
                disabled={isSubmitting}
                type='submit'
                variant={'destructive'}
            >
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
        </form>
    );
};

export default ContactForm;
