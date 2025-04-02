import Card from '../components/Staffingsolutions/Card';
import {
    Briefcase,
    Shield,
    Users,
    FileText,
    UserCheck,
    Layers,
    ArrowDownLeft,
} from 'react-feather';
import { Button } from '../components/UI/button';

const Staffingsolutions = () => {
    const solutions = [
        {
            logo: (
                <FileText
                    size={32}
                    className='text-purple-600'
                />
            ), // 📝 Payroll/HR
            heading: 'HR / Payroll',
            description:
                'We can work as consulting to manage your HR / Payroll needs.',
            linkText: 'Learn More',
            linkUrl: '/hr-services',
        },
        {
            logo: (
                <Briefcase
                    size={32}
                    className='text-purple-600'
                />
            ), // 💼 Contract Jobs
            heading: 'Contract IT / Non IT',
            description:
                'We can provide experts on your term sheet / project basis.',
            linkText: 'Learn More',
            linkUrl: '/business-consulting',
        },
        {
            logo: (
                <Shield
                    size={32}
                    className='text-purple-600'
                />
            ), // 🛡️ Secure Recruitment
            heading: 'Recruitment IT / Non IT',
            description:
                'We can find your needful experts / JDs with our expert talent management team.',
            linkText: 'Learn More',
            linkUrl: '/cybersecurity',
        },
        {
            logo: (
                <Users
                    size={32}
                    className='text-purple-600'
                />
            ), // 👥 Training & Deployment
            heading: 'Train & Deploy',
            description:
                'We can do training with your custom course package and deploy them.',
            linkText: 'Learn More',
            linkUrl: '/global-expansion',
        },
        {
            logo: (
                <UserCheck
                    size={32}
                    className='text-purple-600'
                />
            ), // ✅ Placement & Hiring
            heading: 'Placement Cell',
            description:
                'We provide placement support for campus by providing placement training support.',
            linkText: 'Learn More',
            linkUrl: '/global-expansion',
        },
        {
            logo: (
                <Layers
                    size={32}
                    className='text-purple-600'
                />
            ), // 🏗️ Custom Staffing / Freelancers
            heading: 'Custom Staffing',
            description:
                'We can also provide off-site / freelancers to your custom needs.',
            linkText: 'Learn More',
            linkUrl: '/global-expansion',
        },
    ];

    return (
        <div>
            <div className='relative h-[400px] font-[montserrat] '>
                {/* Background with gradient */}
                <div
                    className={`w-full h-full flex flex-col justify-center items-center text-white bg-gradient-to-r from-purple-900 to-purple-400 dark:bg-gradient-to-b dark:from-black dark:to-[#212121]`}
                >
                    <div className='container mx-auto px-6 flex flex-col justify-center items-center z-10 relative'>
                        <div className='text-center'>
                            <h3 className='text-xl font-medium mb-4 text-gray-100 tracking-wide'>
                                Find the right talent for your business
                            </h3>
                            <h1 className='text-6xl md:text-5xl font-bold mb-6 leading-tight'>
                                Staffing Solutions
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Wave shape */}
                <div className='absolute bottom-0 left-0 w-full overflow-hidden leading-none dark:hidden'>
                    <svg
                        className='relative block w-full h-[200px] transform rotate-180 '
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 1200 120'
                        preserveAspectRatio='none'
                    >
                        <path
                            d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
                            className='dark:hidden'
                            fill='#ffffff'
                            opacity='1'
                        ></path>
                    </svg>
                </div>

                {/* Large odd-shaped decorative elements */}
                <div
                    className='absolute left-10 top-20 w-80 h-80 opacity-20 blur-sm bg-purple-600 dark:bg-zinc-300 backdrop-blur-2xl shadow-white-6xl'
                    style={{
                        borderRadius: '50% 30% 70% 40% / 60% 40% 70% 50%',
                        transform: 'rotate(45deg)',
                    }}
                ></div>

                <div
                    className='absolute right-20 bottom-40 w-96 h-96 opacity-20 blur-sm bg-purple-900'
                    style={{
                        borderRadius: '30% 70% 50% 50% / 50% 50% 70% 30%',
                        transform: 'rotate(-30deg)',
                    }}
                ></div>

                {/* Additional large odd-shaped element using clip-path */}
                <div
                    className='absolute left-40 bottom-20 w-72 h-72 opacity-20 blur-lg bg-purple-500'
                    style={{
                        clipPath:
                            'polygon(50% 0%, 80% 10%, 100% 35%, 90% 70%, 50% 100%, 10% 70%, 0% 35%, 20% 10%)',
                    }}
                ></div>
            </div>

            <div className='relative min-h-[700px]  font-[montserrat] pt-20 '>
                {/* Background with gradient */}
                <div className='w-full h-full flex justify-center items-center  py-10 overflow-hidden'>
                    <div className='max-w-6xl w-full px-4 relative z-10'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {solutions.map((solution, index) => (
                                <Card
                                    key={index}
                                    {...solution}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Background decorative elements */}
                <div className='absolute inset-0 w-full h-full overflow-hidden z-0'>
                    <svg
                        className='w-full h-full'
                        viewBox='0 0 1000 1000'
                        preserveAspectRatio='xMidYMid slice'
                    >
                        {/* Background shapes */}
                        <path
                            d='M260,221
                        Q325,195 390,221
                        Q455,247 481,325
                        Q507,403 455,455
                        Q403,507 325,481
                        Q247,455 195,390
                        Q143,325 260,260'
                            fill='rgb(88 28 135)'
                            opacity='0.3'
                        />

                        <path
                            d='M585,450
                        Q650,400 715,420
                        Q780,440 819,500
                        Q858,560 780,600
                        Q702,640 624,610
                        Q546,580 520,520
                        Q494,460 585,450'
                            fill='rgb(98 48 135)'
                            opacity='0.3'
                        />
                    </svg>
                </div>
            </div>

            <div className='relative min-h-[400px] font-[montserrat] bg-white dark:bg-[#212121]'>
                <div className='container mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center z-10 relative py-12 md:py-16'>
                    {/* Left Column */}
                    <div className='md:w-1/2 text-center md:text-left mb-10 md:mb-0 space-y-6'>
                        <div className='space-y-4'>
                            <h3 className='text-6xl font-bold mb-4 text-grey-200 dark:text-purple-500 tracking-wide'>
                                We strive to make our clients happy
                            </h3>
                            <h3 className='text-xl font-medium mb-4 text-grey-200 dark:text-purple-400 tracking-wide'>
                                So, let's be happy together
                            </h3>
                        </div>
                    </div>

                    {/* Right Column - Image with enhanced styling */}
                    <div className='md:w-2/5 hidden md:block'>
                        <div className='relative p-4'>
                            {/* Decorative element behind image */}
                            <div className='absolute inset-0 bg-purple-500/20 rounded-[100px] transform rotate-6 translate-x-4 translate-y-4 dark:bg-purple-100'></div>

                            {/* Main image */}
                            <img
                                src='https://www.smaatix.com/wp-content/uploads/2022/02/CTA-Our-Services.png'
                                alt='solutions'
                                className='w-full h-full object-cover md:max-h-[400px] rounded-b-[80px] rounded-tl-[200px] rounded-tr-[120px] shadow-xl relative z-10'
                            />

                            {/* Optional floating badge */}
                            <div className='absolute -bottom-4 -left-6 bg-white dark:bg-purple-900 px-6 py-3 rounded-full shadow-lg z-20 text-purple-800 dark:text-white font-medium text-sm flex items-center gap-2'>
                                <span className='w-3 h-3 rounded-full bg-green-500 animate-pulse'></span>
                                Expert Solutions
                            </div>
                        </div>
                    </div>
                </div>

                <div className='absolute bottom-0 left-0 w-full overflow-hidden leading-none '>
                    <svg
                        className='relative block w-full h-[1000px] transform rotate-180'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 1200 120'
                        preserveAspectRatio='none'
                    >
                        <defs>
                            {/* Light Mode Gradient */}
                            <linearGradient
                                id='waveGradient'
                                x1='100%'
                                y1='0%'
                                x2='0%'
                                y2='0%'
                            >
                                <stop
                                    offset='0%'
                                    stopColor='#6b21a8'
                                    stopOpacity='1'
                                />{' '}
                                {/* Purple-900 (right) */}
                                <stop
                                    offset='100%'
                                    stopColor='#d4d4d4'
                                    stopOpacity='0.8'
                                />{' '}
                                {/* Zinc-100 (left) */}
                            </linearGradient>

                            {/* Dark Mode Gradient */}
                            <linearGradient
                                id='waveGradientDark'
                                x1='100%'
                                y1='0%'
                                x2='0%'
                                y2='0%'
                            >
                                <stop
                                    offset='0%'
                                    stopColor='#000000'
                                    stopOpacity='1'
                                />{' '}
                                {/* Black */}
                                <stop
                                    offset='100%'
                                    stopColor='#1b1b1b'
                                    stopOpacity='0.9'
                                />{' '}
                                {/* Dark gray with 90% opacity */}
                            </linearGradient>
                        </defs>

                        {/* Light Mode Wave */}
                        <path
                            d='M0,0V30c60,10,120,15,180,12s120-20,200-22c80-2,160,12,240,22s160,10,240,2c80-8,160-25,240-30s160-2,200,2V0Z'
                            className='dark:hidden'
                            fill='url(#waveGradient)'
                            opacity='1'
                        />

                        {/* Dark Mode Wave */}
                        <path
                            d='M0,0V30c60,10,120,15,180,12s120-20,200-22c80-2,160,12,240,22s160,10,240,2c80-8,160-25,240-30s160-2,200,2V0Z'
                            className='hidden dark:block'
                            fill='url(#waveGradientDark)'
                            opacity='1'
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Staffingsolutions;
