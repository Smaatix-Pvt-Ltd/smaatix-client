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
            const response = await axios.get(
                `${backendUrl}/api/auth/is-verified`,
                {
                    withCredentials: true,
                }
            );
            console.log(response);
            if (response.status !== 200) {
                toast.error('Something went wrong while fetching auth status!');
                return;
            }
            setIsLoggedin(true);
            getUserData();
        } catch (error: unknown) {
            const response = (error as unknown | any)?.response;
            toast.error(response.data.message);
        }
    };
    const getUserData = async () => {
        try {
            const response = await axios.get(`${backendUrl}/api/user/data`, {
                withCredentials: true,
            });
            console.log("Login Data:",response);
            if (response.status !== 200) {
                toast.error('Something went wrong while fetching user data!');
            }
            const data = await response.data;
            setUserData(data.userData);
        } catch (error) {
            toast.error('Something went wrong while fetching user data!');
        }
    };

    useEffect(() => {
        getAuthStatus();
    }, []);

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
