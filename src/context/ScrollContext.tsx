// src/contexts/ScrollContext.tsx
import React, {
    createContext,
    useState,
    useEffect,
    useContext,
    useMemo,
    ReactNode, // Import ReactNode for typing children
} from 'react';

// Simple throttle function (remains the same JS, but could be typed further if needed)
const throttle = (func: (...args: any[]) => void, limit: number) => {
    let inThrottle: boolean;
    return function (this: any, ...args: any[]) {
        // Use 'this: any' if context matters
        // const args = arguments; // 'arguments' is not ideal in TS
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
};

// --- Define Types ---
interface ScrollContextState {
    isScrolledPastThreshold: boolean;
}

interface ScrollProviderProps {
    children: ReactNode; // Type children prop
    threshold?: number; // Optional threshold prop
}

// --- Create Context ---
// Provide a default value matching the context state shape for better type safety
const defaultState: ScrollContextState = {
    isScrolledPastThreshold: false,
};
const ScrollContext = createContext<ScrollContextState>(defaultState);

// --- Define Default Threshold ---
const DEFAULT_SCROLL_THRESHOLD = 50;

// --- Create Provider Component ---
export const ScrollProvider: React.FC<ScrollProviderProps> = ({
    children,
    threshold = DEFAULT_SCROLL_THRESHOLD, // Use default or passed prop
}) => {
    const [isScrolledPastThreshold, setIsScrolledPastThreshold] =
        useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const shouldBeHidden = window.scrollY > threshold; // Use the threshold prop
            // Only update state if the value actually changes
            setIsScrolledPastThreshold((prevState) =>
                prevState !== shouldBeHidden ? shouldBeHidden : prevState
            );
        };

        const throttledHandleScroll = throttle(handleScroll, 100);

        window.addEventListener('scroll', throttledHandleScroll, {
            passive: true,
        });
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener('scroll', throttledHandleScroll);
        };
    }, [threshold]); // Add threshold to dependency array

    // Memoize the context value
    const value = useMemo(
        () => ({
            isScrolledPastThreshold,
        }),
        [isScrolledPastThreshold]
    );

    return (
        <ScrollContext.Provider value={value}>
            {children}
        </ScrollContext.Provider>
    );
};

// --- Create Custom Hook ---
export const useScrollContext = (): ScrollContextState => {
    const context = useContext(ScrollContext);
    // Check against default state is less robust than checking if provider wrapped it
    // It's better practice to ensure the provider *is* used.
    // A check like below is still good, maybe using a dedicated flag in context
    // if (context === defaultState) {
    //   console.warn('useScrollContext used outside of a ScrollProvider. Using default values.');
    // }
    // A common pattern is to initialize context with `null` and check for that,
    // throwing an error if null, forcing provider usage. Let's stick to the
    // previous safer pattern: Initialize with null and throw error.

    // --- Revised Context Initialization & Hook for Robustness ---
    // const ScrollContext = createContext<ScrollContextState | null>(null); // Initialize with null

    // export const useScrollContext = (): ScrollContextState => {
    //     const context = useContext(ScrollContext);
    //     if (context === null) {
    //         throw new Error('useScrollContext must be used within a ScrollProvider');
    //     }
    //     return context;
    // };
    // If using the null initialization above, uncomment this hook version.
    // For now, sticking with the default object initialization.
    if (context === undefined) {
        // Default object won't be strictly === defaultState
        // This check might be less reliable if default values coincidentally match initial state
        console.warn(
            'useScrollContext may be used outside of a ScrollProvider.'
        );
        // Consider throwing error or providing a more robust check if needed
    }
    return context;
};
