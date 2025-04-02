import React from 'react';
import { Input } from '../UI/input';
import { Button } from '../UI/button';
import { FieldValues, useForm } from 'react-hook-form';
import { contactFormSchema, TcontactFormSchema } from '../../lib/types';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from 'emailjs-com';

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

    
    const public_key = import.meta.env.VITE_MAIL_JS_PUBLIC_KEY;
    const service_id = import.meta.env.VITE_MAIL_JS_SERVICE_ID;
    const template_id = import.meta.env.VITE_MAIL_JS_TEMPLATE_ID;
    



    const onSubmit = async (data: FieldValues) => {
        try {
           
    
            const response = await emailjs.send(
                service_id,
                template_id,
                {
                    user_name: data.name,  // Make sure these match your template variables
                    user_email: data.email,
                    user_phone: data.phone,
                    user_message: data.message,
                },
                public_key
            );
    
            if (response.status === 200) {
                alert("Message sent successfully!");
                reset();
            } else {
                alert("Failed to send the message. Please try again.");
            }
        } catch (error) {
            console.error("EmailJS Error:", error);
            alert("An error occurred while sending the message.");
        }
    };
    

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='h-full max-h-[500px] lg:w-7/12 p-11 flex flex-col flex-nowrap rounded-xl gap-1 items-start justify-start shadow-lg border bg-white dark:bg-zinc-800 dark:text-white'
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
            {errors.name && <div className="text-red-500">{errors.name.message}</div>}

            <Input
                {...register('phone')}
                label='Your Phone Number'
                type='tel'
                id='phone'
                variant={'default'}
                placeholder='Enter your phone number'
                className='w-full h-12 mb-4'
            />
            {errors.phone && <div className="text-red-500">{errors.phone.message}</div>}

            <Input
                {...register('email')}
                label='Your Email'
                type='email'
                id='email'
                placeholder='Enter your email address'
                variant={'default'}
                className='w-full h-12 mb-4'
                required
            />
            {errors.email && <div className="text-red-500">{errors.email.message}</div>}

            <div className='mb-6 w-full'>
                <label htmlFor='message' className='block font-bold ml-3 text-md'>
                    Your Message
                </label>
                <textarea
                    {...register('message')}
                    id='message'
                    name='message'
                    className='w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-opacity-50 dark:bg-zinc-800'
                    placeholder='How can we help you?'
                    required
                ></textarea>
                {errors.message && <div className="text-red-500">{errors.message.message}</div>}
            </div>

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
