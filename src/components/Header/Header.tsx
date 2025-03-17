import Navbar from '../UI/navbar';
// import ThemeToggle from '../UI/ThemeToggle';

const Header = () => {
    const NavItems = [
        { label: 'Software Solutions', href: '/about' },
        // { label: 'Corporate Gifting', href: '/services' },
        { label: 'Staffing Solutions', href: '/blog' },
        { label: 'Contact', href: '/contact' },
        { label: 'About Us', href: '/' },
        // { label: 'External', href: 'https://example.com', isExternal: true },
    ];
    return (
        <div className='sticky  top-0 z-50 bg-gradient-to-r from-purple-900 to-zinc-100 dark:bg-gradient-to-r dark:from-black dark:to-[#1b1b1b] flex justify-between items-center shadow-lg drop-shadow-2xl dark:border-b-[1px] dark:border-zinc-300'>
            <Navbar
                logo={
                    <a href='/index'>
                        <img
                            src='smaatix-logo.png'
                            alt='Smaatix'
                            className='w-36 h-12 relative dark:bg-white rounded-md p-2'
                        />
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
