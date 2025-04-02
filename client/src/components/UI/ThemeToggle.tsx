'use client'; //Keep this for React Server Components
import React, { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from 'lucide-react';
import { cn } from '../../lib/util';

interface ThemeToggleProps {
    className?: string;
    defaultTheme?: 'dark' | 'light';
    storageKey?: string;
    size?: 'sm' | 'md' | 'lg';
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
    className,
    defaultTheme = 'light',
    storageKey = 'theme',
    size = 'md',
}) => {
    const [theme, setTheme] = useState<'dark' | 'light'>(defaultTheme);
    const [mounted, setMounted] = useState(false); // Add a mounted state

    useEffect(() => {
        const storedTheme = localStorage.getItem(storageKey) as
            | 'dark'
            | 'light'
            | null;

        const initialTheme = storedTheme || defaultTheme; // Determine initial theme

        const applyTheme = (theme: 'dark' | 'light') => {
            if (theme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        };

        applyTheme(initialTheme); // Apply theme *before* setting state
        setTheme(initialTheme);
        setMounted(true);
    }, [storageKey, defaultTheme]);

    useEffect(() => {
        if (!mounted) return; // Don't run this effect until mounted

        const applyTheme = (theme: 'dark' | 'light') => {
            if (theme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        };

        applyTheme(theme);
        localStorage.setItem(storageKey, theme);
    }, [theme, storageKey, mounted]); // Add mounted to dependencies

    const toggleTheme = () => {
        const nextTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(nextTheme);
    };

    const getButtonLabel = () => {
        return theme === 'light' ? 'Dark' : 'Light';
    };

    const getSizeClasses = () => {
        switch (size) {
            case 'sm':
                return 'h-7 w-7';
            case 'lg':
                return 'h-10 w-10';
            default:
                return 'h-8 w-8'; // Medium size
        }
    };

    if (!mounted) {
        return null; // Or a loading spinner/placeholder
    }

    return (
        <button
            className={cn(
                'relative flex items-center justify-center rounded-full focus:outline-none dark:focus:ring-blue-400',
                getSizeClasses(),
                'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600', // Background based on theme
                'transition-colors duration-200', // Transition for background
                className
            )}
            onClick={toggleTheme}
            aria-label={`Switch to ${getButtonLabel()} mode`}
        >
            {theme === 'light' && (
                <MoonIcon className='h-4 w-4 text-gray-800 dark:text-gray-400' />
            )}
            {theme === 'dark' && (
                <SunIcon className='h-4 w-4 text-yellow-500 dark:text-yellow-300' />
            )}
        </button>
    );
};

export default ThemeToggle;
