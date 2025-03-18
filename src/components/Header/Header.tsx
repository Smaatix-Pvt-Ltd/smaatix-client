import Navbar from '../UI/navbar';
// import ThemeToggle from '../UI/ThemeToggle';

const Header = () => {
    const NavItems = [
        { label: 'Products', href: '/products' },
        { label: 'Training', href: '/training' },
        { label: 'Software Solutions', href: '/software-solutions' },
        // { label: 'Corporate Gifting', href: '/services' },
        { label: 'Staffing Solutions', href: '#' },
        { label: 'Contact', href: '/contact' },
        { label: 'About Us', href: '/' },
        { label: 'Careers', href: '/careers' },

        // { label: 'External', href: 'https://example.com', isExternal: true },
    ];
    return (
        <div className='sticky  top-0 z-50 bg-gradient-to-r from-purple-900 to-zinc-100 dark:bg-gradient-to-r dark:from-black dark:to-[#1b1b1b] flex justify-between items-center shadow-lg drop-shadow-2xl dark:border-b-[1px] dark:border-zinc-300'>
            <Navbar
                logo={
                    <a
                        href='/index'
                        className='relative'
                    >
                        <img
                            src='smaatix-logo.png'
                            alt='Smaatix'
                            className='w-36 h-12 relative  rounded-md p-1 z-10'
                        />
                        <div className='absolute dark:bg-white rounded-full h-3 w-3/4  top-[29px] left-9 z-0'></div>
                    </a>
                }
                navItems={NavItems}
                isSticky={true}
                navItemClassName='text-black dark:text-white'
            />
        </div>
    );
};

export default Header;
