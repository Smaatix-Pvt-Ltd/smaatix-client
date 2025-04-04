import React from 'react';
// Optional: Import icons for social links if you add them
// import { FaLinkedin, FaTwitter } from 'react-icons/fa';

// Define type for team member data
type TeamMember = {
    imgSrc: string;
    name: string;
    title: string;
    // Optional social links
    // linkedin?: string;
    // twitter?: string;
};

// Sample team data (Replace with your actual data)
const teamMembers: TeamMember[] = [
    {
        imgSrc: 'https://img.freepik.com/premium-vector/professional-male-avatar-profile-picture-employee-work_1322206-66590.jpg', // Use better placeholders or real images
        name: 'John Doe',
        title: 'CEO & Founder',
    },
    {
        imgSrc: 'https://img.freepik.com/premium-vector/avatar-portrait-young-caucasian-woman-profile-picture-userpic-social-network_1322206-154218.jpg', // Example different image
        name: 'Jane Smith',
        title: 'Chief Technology Officer',
    },
    {
        imgSrc: 'https://img.freepik.com/premium-vector/professional-male-avatar-profile-picture-employee-work_1322206-66590.jpg',
        name: 'Mike Johnson',
        title: 'Lead Developer',
    },
    // Add more team members as needed
    // { imgSrc: '...', name: '...', title: '...' },
    // { imgSrc: '...', name: '...', title: '...' },
    // { imgSrc: '...', name: '...', title: '...' },
];

const Team: React.FC = () => {
    return (
        // Use implicit theme background, standard padding
        <section className='relative w-full py-24 md:py-32'>
            <div className='container mx-auto px-6'>
                {/* Section Header */}
                <div className='text-center mb-16 animate-fadeInUp'>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4'>
                        Meet Our Team
                    </h2>
                    <div className='w-20 h-px bg-border mx-auto mb-6'></div>
                    <p className='max-w-xl mx-auto text-foreground-secondary'>
                        The passionate individuals driving our innovation and
                        success.
                    </p>
                </div>

                {/* Team Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto'>
                    {teamMembers.map((member, index) => (
                        // Apply themed card styles
                        <div
                            key={member.name} // Use name or a unique ID if available
                            className='animate-fadeInUp flex flex-col items-center text-center bg-[--card-background] border border-[--card-border] rounded-xl p-6 shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-all duration-300 hover:scale-[1.03]'
                            style={{ animationDelay: `${200 + index * 100}ms` }}
                        >
                            {/* Team Member Image */}
                            <img
                                src={member.imgSrc}
                                alt={`Team Member - ${member.name}`}
                                // Added subtle border, object-cover
                                className='w-24 h-24 rounded-full mb-5 object-cover border-2 border-background dark:border-slate-700 shadow-sm'
                                loading='lazy'
                            />

                            {/* Name */}
                            <h3 className='text-xl font-semibold text-foreground mb-1'>
                                {member.name}
                            </h3>

                            {/* Title */}
                            <p className='text-base text-foreground-secondary'>
                                {member.title}
                            </p>

                            {/* Optional: Social Links */}
                            {/* <div className='mt-4 flex space-x-3'>
                                {member.linkedin && (
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground-secondary hover:text-accent-start">
                                        <FaLinkedin className="w-5 h-5" />
                                    </a>
                                )}
                                {member.twitter && (
                                     <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-foreground-secondary hover:text-accent-start">
                                        <FaTwitter className="w-5 h-5" />
                                    </a>
                                )}
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
