import { LoginPopUpContextType } from '../lib/types';
import React, { createContext, useState } from 'react';

export const LoginPopUpContext = createContext<LoginPopUpContextType>({
    popup: false,
    setPopup: () => {},
    handleLoginClose: () => {},
    signUpActive: false,
    setSignUpActive: () => {},
    handleSignUpClick: () => {},
    handleLoginClick: () => {},
});

export const LoginPopUpProvider: React.FC<{ children: React.ReactNode }> = (
    props
) => {
    const [popup, setPopup] = useState(false);
    const [signUpActive, setSignUpActive] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const handleLoginClick = () => {
        setPopup(true);
        setSignUpActive(false);
        setShowForgotPassword(false);
    };

    const handleLoginClose = () => {
        setPopup(false);
        setSignUpActive(false);
        setShowForgotPassword(false);
    };

    const handleSignUpClick = () => {
        setSignUpActive(true);
    };

    const handleForgotPasswordClick = () => {
        setShowForgotPassword(true);
    };

    const value: LoginPopUpContextType = {
        popup,
        setPopup,
        handleLoginClose,
        signUpActive,
        setSignUpActive,
        handleSignUpClick,
        handleLoginClick,
        handleForgotPasswordClick,
        showForgotPassword,
        setShowForgotPassword,
    };
    return (
        <LoginPopUpContext.Provider value={value}>
            {props.children}
        </LoginPopUpContext.Provider>
    );
};
