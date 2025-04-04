import React, { useState, useEffect, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { AiOutlineBars, AiOutlineClose, AiOutlineDown } from 'react-icons/ai';
import ThemeToggle from './ThemeToggle';
import { AppContext } from '../../context/AppContext';

interface NavItem {
    label: string;
    href?: string;
    isExternal?: boolean;
    children?: NavItem[];
}

interface NavbarProps {
    logo?: React.ReactNode;
    navItems: NavItem[];
    cta?: React.ReactNode;
    className?: string;
    containerClassName?: string;
    navItemClassName?: string;
    mobileMenuBreakpoint?: string;
    isSticky?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
    logo,
    navItems,
    cta,
    className,
    containerClassName,
    navItemClassName,
    mobileMenuBreakpoint = 'lg',
    isSticky = false,
}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { activeTab, setActiveTab } = useContext(AppContext);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Add click outside listener to close dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
    };

    const handleLinkClick = (label: string) => {
        setActiveTab(label);
        setOpenDropdown(null);
    };

    return (
        <nav
            className={cn(
                'w-fit py-4 transition-shadow duration-300 bg-transparent backdrop-blur-md ',
                isSticky && 'sticky top-0 z-50',

                className
            )}
        >
            <div
                className={cn(
                    'container mx-auto flex items-center justify-between max-md:justify-end',
                    containerClassName
                )}
            >
                {/* Desktop Navigation */}
                <nav
                    className={cn(
                        'items-center space-x-6 hidden', // Initially hidden on small screens
                        ` lg:flex` // Make it flex on large screens and above
                    )}
                >
                    {navItems.map((item) => (
                        <div
                            key={item.label}
                            className='relative group'
                            ref={item.children ? dropdownRef : undefined}
                        >
                            {item.children ? (
                                <>
                                    <button
                                        onMouseEnter={() =>
                                            setOpenDropdown(
                                                openDropdown === item.label
                                                    ? null
                                                    : item.label
                                            )
                                        }
                                        onClick={() =>
                                            setOpenDropdown(
                                                openDropdown === item.label
                                                    ? null
                                                    : item.label
                                            )
                                        }
                                        className={cn(
                                            'text-purple dark:text-gray-300 hover:text-purple-900 dark:hover:text-purple-400 transition-colors duration-200 flex items-center font-medium',
                                            activeTab === item.label ||
                                                (item.children &&
                                                    item.children.some(
                                                        (child) =>
                                                            activeTab ===
                                                            child.label
                                                    ))
                                                ? 'font-bold text-purple-900 dark:text-purple-400'
                                                : '',
                                            navItemClassName
                                        )}
                                        aria-haspopup='true'
                                        aria-expanded={
                                            openDropdown === item.label
                                        }
                                    >
                                        {item.label}
                                        <AiOutlineDown
                                            className={`ml-1 w-3.5 h-3.5 mt-1 font-bold transition-transform duration-300 ease-in-out ${
                                                openDropdown === item.label
                                                    ? 'rotate-180'
                                                    : ''
                                            }`}
                                        />
                                    </button>
                                    {/* Enhanced Dropdown Menu */}
                                    {openDropdown === item.label && (
                                        <div className='absolute left-0 mt-2 w-56 bg-white dark:bg-gray-800 shadow-xl rounded-md py-1.5 z-50 border border-gray-100 dark:border-gray-700 transform transition-all duration-200 origin-top-left'>
                                            {item.children.map(
                                                (child, index) => (
                                                    <React.Fragment
                                                        key={
                                                            child.href ||
                                                            child.label
                                                        }
                                                    >
                                                        <Link
                                                            to={child.href!}
                                                            className='block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-purple-50 dark:hover:bg-gray-700 hover:text-purple-900 dark:hover:text-purple-400 transition-colors duration-150 flex items-center'
                                                            onClick={() =>
                                                                handleLinkClick(
                                                                    child.label
                                                                )
                                                            }
                                                        >
                                                            {child.icon && (
                                                                <span className='mr-2.5'>
                                                                    {child.icon}
                                                                </span>
                                                            )}
                                                            {child.label}
                                                        </Link>
                                                        {index <
                                                            item.children
                                                                .length -
                                                                1 && (
                                                            <div className='mx-3 my-0.5 border-t border-gray-100 dark:border-gray-700' />
                                                        )}
                                                    </React.Fragment>
                                                )
                                            )}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link
                                    onClick={() => setActiveTab(item.label)}
                                    to={item.href!}
                                    className={cn(
                                        'text-purple dark:text-gray-300 hover:text-purple-900 dark:hover:text-purple-400 transition-colors duration-200 font-medium',
                                        activeTab === item.label
                                            ? 'font-bold text-purple-900 dark:text-purple-400'
                                            : '',
                                        navItemClassName
                                    )}
                                    target={
                                        item.isExternal ? '_blank' : undefined
                                    }
                                    rel={
                                        item.isExternal
                                            ? 'noopener noreferrer'
                                            : undefined
                                    }
                                >
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Theme Toggle & Mobile Menu Button */}
                <div className='flex items-center justify-end space-x-4'>
                    <button
                        className={cn(
                            `${mobileMenuBreakpoint}:hidden`,
                            'text-black dark:text-gray-300 focus:outline-none'
                        )}
                        onClick={toggleMobileMenu}
                        aria-label='Toggle Menu'
                    >
                        {isMobileMenuOpen ? (
                            <AiOutlineClose className='h-8 w-8 text-black dark:text-white' />
                        ) : (
                            <AiOutlineBars className='h-8 w-8 text-black dark:text-white' />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    'lg:hidden overflow-hidden  transition-height duration-300 ease-in-out',
                    isMobileMenuOpen ? 'h-auto' : 'h-0'
                )}
            >
                <div className='py-4 px-4 flex flex-col space-y-4 bg-white dark:bg-gray-900 shadow-lg'>
                    {navItems.map((item) => (
                        <div
                            key={item.label}
                            className='relative'
                        >
                            {item.children ? (
                                <>
                                    <button
                                        onClick={() =>
                                            setOpenDropdown(
                                                openDropdown === item.label
                                                    ? null
                                                    : item.label
                                            )
                                        }
                                        className='w-full text-left py-2 px-4 rounded-md text-black dark:text-gray-200 hover:bg-purple-600 dark:hover:bg-gray-800 transition'
                                        aria-haspopup='true'
                                        aria-expanded={
                                            openDropdown === item.label
                                        }
                                    >
                                        {item.label}
                                    </button>
                                    {openDropdown === item.label && (
                                        <div className='pl-4'>
                                            {item.children.map((child) => (
                                                <Link
                                                    key={
                                                        child.href ||
                                                        child.label
                                                    }
                                                    to={child.href!}
                                                    className='block py-2 px-4 text-black dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition'
                                                    onClick={closeMobileMenu}
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <Link
                                    key={item.href || item.label}
                                    to={item.href!}
                                    className='block text-black dark:text-gray-200 py-2 px-4 rounded-md hover:bg-purple-600 dark:hover:bg-gray-800 transition-colors duration-200'
                                    onClick={closeMobileMenu}
                                    target={
                                        item.isExternal ? '_blank' : undefined
                                    }
                                    rel={
                                        item.isExternal
                                            ? 'noopener noreferrer'
                                            : undefined
                                    }
                                >
                                    {item.label}
                                </Link>
                            )}
                        </div>
                    ))}
                    {cta && <div className='mt-2'>{cta}</div>}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
