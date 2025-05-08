import React from 'react';
import { Input } from '../UI/input';
import { Button } from '../UI/button';
import { FieldValues, useForm } from 'react-hook-form';
import { contactFormSchema, TcontactFormSchema } from '../../lib/types'; // Ensure this path is correct
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

const ContactForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<TcontactFormSchema>({
        resolver: zodResolver(contactFormSchema), // Resolver enforces schema rules
    });

    // Keep EmailJS keys
    const public_key = import.meta.env.VITE_MAIL_JS_PUBLIC_KEY;
    const service_id = import.meta.env.VITE_MAIL_JS_SERVICE_ID;
    const template_id = import.meta.env.VITE_MAIL_JS_TEMPLATE_ID;

    const onSubmit = async (data: FieldValues) => {
        if (!public_key || !service_id || !template_id) {
            console.error('EmailJS environment variables are not configured.');
            alert('Configuration error. Cannot send message.');
            // toast.error("Configuration error. Cannot send message.");
            return;
        }
        try {
            const response = await emailjs.send(
                service_id,
                template_id,
                data as Record<string, unknown>,
                public_key
            );
            if (response.status === 200) {
                // alert('Message sent successfully!');
                toast.success("Message sent successfully!");
                reset();
            } else {
                // //alert(
                //     `Failed to send message. Status: ${response.status}, Text: ${response.text}`
                // );
                toast.error(`Failed to send message: ${response.text}`);
            }
        } catch (error: any) {
            console.error('EmailJS Error:', error);
            alert(
                `An error occurred: ${
                    error?.text || error?.message || 'Unknown error'
                }`
            );
            // toast.error(`An error occurred: ${error?.text || 'Please try again.'}`);
        }
    };

    // Common input/textarea classes
    const inputBaseClasses =
        'w-full rounded-lg border border-[--color-border] bg-background px-4 py-2.5 text-foreground placeholder:text-foreground-secondary focus:outline-none focus:ring-2 focus:ring-[--color-text-accent-start] focus:ring-offset-1 focus:border-[--color-text-accent-start] dark:focus:ring-offset-slate-900 transition-shadow';

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            // Keep overall form gap
            className='flex w-full flex-col gap-4 rounded-xl border border-[--color-border] bg-[--card-background] p-6 shadow-[var(--card-shadow)]'
        >
            {/* --- Name and Phone Side-by-Side --- */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                {/* Name Field */}
                <div className='flex flex-col h-fit'>
                    {/* REDUCED LABEL MARGIN-BOTTOM */}
                    <label
                        htmlFor='name'
                        className='mb-1 block text-sm font-medium text-foreground-secondary'
                    >
                        Your Name <span className='text-red-500'>*</span>
                    </label>
                    <Input
                        {...register('name')}
                        type='text'
                        id='name'
                        placeholder='Enter your name'
                        className={inputBaseClasses}
                    />
                    {errors.name && (
                        <p className='mt-1 text-xs text-red-500'>
                            {errors.name.message}
                        </p>
                    )}
                </div>

                {/* Phone Field */}
                <div className='flex flex-col h-fit'>
                    {/* REDUCED LABEL MARGIN-BOTTOM */}
                    <label
                        htmlFor='phone'
                        className='mb-1 block text-sm font-medium text-foreground-secondary'
                    >
                        Your Phone <span className='text-red-500'>*</span>
                    </label>
                    <Input
                        {...register('phone')}
                        type='tel'
                        id='phone'
                        placeholder='Enter phone number'
                        className={inputBaseClasses}
                    />
                    {errors.phone && (
                        <p className='mt-1 text-xs text-red-500'>
                            {errors.phone.message}
                        </p>
                    )}
                </div>
            </div>
            {/* --- End Name and Phone --- */}

            {/* --- Email Field --- */}
            <div className='flex flex-col h-fit'>
                <label
                    htmlFor='email'
                    className='mb-1 block text-sm font-medium text-foreground-secondary'
                >
                    Your Email <span className='text-red-500'>*</span>
                </label>
                <Input
                    {...register('email')}
                    type='email'
                    id='email'
                    placeholder='Enter your email address'
                    className={inputBaseClasses}
                />
                {errors.email && (
                    <p className='mt-1 text-xs text-red-500'>
                        {errors.email.message}
                    </p>
                )}
            </div>

            {/* --- Message Field --- */}
            <div>
                {/* REDUCED LABEL MARGIN-BOTTOM */}
                <label
                    htmlFor='message'
                    className='mb-1 block text-sm font-medium text-foreground-secondary'
                >
                    Your Message <span className='text-red-500'>*</span>
                </label>
                <textarea
                    {...register('message')}
                    id='message'
                    rows={3}
                    className={`${inputBaseClasses} min-h-[80px] resize-y`}
                    placeholder='How can we help you?'
                />
                {errors.message && (
                    <p className='mt-1 text-xs text-red-500'>
                        {errors.message.message}
                    </p>
                )}
            </div>

            {/* --- Submit Button --- */}
            <div className='pt-1'>
                <Button
                    disabled={isSubmitting}
                    type='submit'
                    variant={'default'}
                    size={'lg'}
                    className='w-full sm:w-auto'
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
            </div>
        </form>
    );
};

export default ContactForm;
