import React from 'react';

const WhyUs = () => {
    return (
        <section className='why-choose-us bg-gradient-to-r from-purple-800 to-indigo-800 py-20 px-5'>
            <h2 className='text-4xl mb-10 text-white text-center'>
                Why Choose Us?
            </h2>
            <div className='strengths-grid grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto'>
                <div className='strength-card bg-white/10 border border-white/20 rounded-xl p-5 backdrop-blur transition-transform hover:translate-y-[-10px]'>
                    <h3 className='text-xl mb-2'>Innovative Approach</h3>
                    <p>
                        We stay ahead of the curve with cutting-edge technology.
                    </p>
                </div>
                <div className='strength-card bg-white/10 border border-white/20 rounded-xl p-5 backdrop-blur transition-transform hover:translate-y-[-10px]'>
                    <h3 className='text-xl mb-2'>Customer-Centric Solutions</h3>
                    <p>Your success is our priority.</p>
                </div>
                <div className='strength-card bg-white/10 border border-white/20 rounded-xl p-5 backdrop-blur transition-transform hover:translate-y-[-10px]'>
                    <h3 className='text-xl mb-2'>Expert Team</h3>
                    <p>Our team of professionals delivers excellence.</p>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
