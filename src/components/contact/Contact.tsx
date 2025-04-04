import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import ContactForm from './ContactForm';
import ContactCard from './ContactCard';

type ContactInfoItem = {
    icon: React.ReactNode;
    label: string;
    value: string;
    href?: string;
};

export const Contact: React.FC = () => {
    const contactDetails: ContactInfoItem[] = [
        {
            icon: <FaMapMarkerAlt />,
            label: 'Address',
            value: (
                <>
                    <h3>Address 1:</h3>
                    <div className='text-sm text-foreground-secondary'>
                        36/5, Hustlehub Tech Park, Somasundarapalya Main Rd,
                        adjacent 27th Main Road, ITI Layout, Sector 2,
                        HaralukunteVillage, HSR Layout, Bengaluru,
                        Karnataka-560102
                    </div>
                    <h3>Address 2:</h3>
                    <div className='text-sm text-foreground-secondary'>
                        Thirumenahalli Main Rd, Block 3, Agrahara Badavane,
                        Bengaluru, Thirumenahalli, Karnataka-560064 (below SLV
                        HITECH STAY)
                    </div>
                </>
            ),
        },
        {
            icon: <FaPhone />,
            label: 'Phone',
            value: '9845442227',
            href: 'tel:+91 9845442227',
        },
        {
            icon: <FaEnvelope />,
            label: 'Email',
            value: 'info@smaatix.com',
            href: 'mailto:info@smaatix.com',
        },
    ];

    return (
        <section className='relative w-full py-4 md:py-8 min-h-[85vh]'>
            <div className='container mx-auto px-6 relative z-10'>
                {/* Section Header */}
                <div className='text-center mb-10 animate-fadeInUp'>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4'>
                        Get In Touch
                    </h2>
                    <div className='w-20 h-px bg-border mx-auto mb-3'></div>
                    <p className='max-w-xl mx-auto text-foreground-secondary'>
                        We're here to help. Reach out via the form or contact
                        details below.
                    </p>
                </div>

                {/* --- Integrated Contact Card --- */}
                <div
                    className='relative max-w-screen-lg mx-auto bg-[--card-background] border border-[--card-border] rounded-xl shadow-[var(--card-shadow)] p-4 md:p-6 lg:p-10 animate-fadeInUp'
                    style={{ animationDelay: '200ms' }}
                >
                    {/* Grid for Form and Info */}
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start'>
                        {/* Left Side: Form */}
                        <div className='w-full'>
                            <h3 className='text-2xl font-semibold text-foreground mb-6'>
                                Send us a Message
                            </h3>
                            {/* Assuming ContactForm uses theme vars internally */}
                            <ContactForm />
                        </div>

                        {/* Right Side: Contact Info */}
                        <div className='w-full'>
                            <ContactCard contactDetails={contactDetails} />
                            {/*  Add a simple map placeholder or social links here */}
                            {/* <div className='mt-8 h-40 bg-neutral-100 dark:bg-slate-700 rounded flex items-center justify-center text-foreground-secondary'>
                                 Map Placeholder
                             </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
