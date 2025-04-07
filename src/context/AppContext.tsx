import { AppValue } from '../lib/types';
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const AppContext = createContext<AppValue>({
    backendUrl: '',
    isLoggedin: false,
    setIsLoggedin: () => {},
    userData: false,
    activeTab: 'home',
    setActiveTab: () => {},
    setUserData: () => {},
    getUserData: async () => {},
});

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = (
    props
) => {
    axios.defaults.withCredentials = true;
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [userData, setUserData] = useState(false);
    const [activeTab, setActiveTab] = useState("home");

    const getAuthStatus = async () => {
        try {
            const response = await axios.get(`${backendUrl}/api/auth/is-verified`, {
                withCredentials: true,
            });

            if (response.data.success) {
                setIsLoggedin(true);
                await getUserData();
            } else {
                toast.error(response.data.message || 'Authentication failed');
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data?.message || 'Error checking authentication status');
            } else {
                toast.error('An unexpected error occurred');
            }
            setIsLoggedin(false);
        } finally {
            
        }
    };

    const getUserData = async () => {
        try {
            const response = await axios.get(`${backendUrl}/api/user/data`, {
                withCredentials: true,
            });

            if (response.data.success) {
                setUserData(response.data.user); // Changed from userData to user
            } else {
                toast.error(response.data.message || 'Failed to fetch user data');
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data?.message || 'Error fetching user data');
            } else {
                toast.error('An unexpected error occurred');
            }
        }
    };

    useEffect(() => {
        getAuthStatus();
    }, [backendUrl]); // Added backendUrl as dependency

    const value: AppValue = {
        backendUrl,
        isLoggedin,
        setIsLoggedin,
        userData,
        setUserData,
        getUserData,
        activeTab,
        setActiveTab,
    };
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};
