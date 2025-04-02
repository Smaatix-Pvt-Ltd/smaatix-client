import axios from 'axios';
import { useState, createContext, FC, ReactNode, useContext } from 'react';
import { AppContext } from './AppContext';
import { toast } from 'react-toastify';
import { accountVerifyvalue } from '../lib/types';

export const AccountVerifyContext = createContext();

export const AccountVerifyContextProvider: FC<{ children: ReactNode }> = (
    props
) => {
    const [verifyAccountPopup, setVerifyAccountPopup] = useState(false);
    const { backendUrl } = useContext(AppContext);

    const handleVerifyAccountOpen = async () => {
        try {
            axios.defaults.withCredentials = true;
            const response = await axios.post(
                `${backendUrl}/api/auth/send-verify-otp`
            );
            if (response.status !== 200) {
                toast.error(response.data.message);
                return;
            }
            const data = await response.data;
            toast.success(data.message);
            setVerifyAccountPopup(true);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    const handleVerifyAccountClose = async () => {
        setVerifyAccountPopup(false);
    };

    const value: accountVerifyvalue = {
        verifyAccountPopup,
        setVerifyAccountPopup,
        handleVerifyAccountOpen,
        handleVerifyAccountClose,
    };

    return (
        <AccountVerifyContext.Provider value={value}>
            {props.children}
        </AccountVerifyContext.Provider>
    );
};
