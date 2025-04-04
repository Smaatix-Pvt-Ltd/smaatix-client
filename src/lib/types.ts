import { Dispatch, SetStateAction } from 'react';
import { z } from 'zod';

export const contactFormSchema = z.object({
    name: z
        .string()
        .min(2, 'Name should atleast have 2 characters')
        .max(20, 'Name should not exceed 20 characters'),
    phone: z
        .string()
        .min(10, 'Phone Number Should be 10 digits')
        .max(10, 'Phone Number Should be 10 digits')
        .regex(/^[0-9]+$/, 'Phone number must contain only digits'),
    email: z.string().email(),
    message: z.string().min(10),
});
// .refine((data) => data.name === data.email, {
//     message: 'Name and Email should be same',
//     path: ['email'],
// });

export type TcontactFormSchema = z.infer<typeof contactFormSchema>;

export const loginFormSchema = z.object({
    email: z.string().email(),
    password: z
        .string()
        .min(8)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!])/),
});

// Define Zod schema for validation
export const loginSchema = z.object({
    email: z.string().email(),
    password: z
        .string()
        .min(6, { message: 'Password must be at least 6 characters' }),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const signupSchema = z
    .object({
        name: z.string().min(2, 'Name must be at least 2 characters long'),
        username: z
            .string()
            .min(3, 'Username must be at least 3 characters long'),
        email: z.string().email('Invalid email address'),
        password: z
            .string()
            .min(6, 'Password must be at least 6 characters long'),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'Passwords do not match',
        path: ['confirmPassword'],
    });

export type SignUpFormData = z.infer<typeof signupSchema>;

export type LoginPopUpContextType = {
    popup?: boolean;
    setPopup?: Dispatch<SetStateAction<boolean>>;
    handleLoginClose?: (() => void) | undefined;
    signUpActive?: boolean;
    setSignUpActive?: Dispatch<SetStateAction<boolean>>;
    handleSignUpClick?: () => void | undefined;
    handleLoginClick?: () => void | undefined;
    handleForgotPasswordClick?: () => void | undefined;
    showForgotPassword?: boolean;
    setShowForgotPassword?: Dispatch<SetStateAction<boolean>>;
};

export type AppValue = {
    backendUrl?: string;
    isLoggedin?: boolean;
    setIsLoggedin?: Dispatch<SetStateAction<boolean>>;
    userData?: boolean; // UserData object or null if not logged in/loaded
    setUserData?: Dispatch<SetStateAction<boolean>>; // Function that takes UserData or null
    getUserData?: () => Promise<void>; // Assuming it's an async function, adjust if not
};

export type accountVerifyvalue = {
    verifyAccountPopup?: boolean;
    setVerifyAccountPopup?: Dispatch<SetStateAction<boolean>>;
    handleVerifyAccountOpen?: () => Promise<void>;
    handleVerifyAccountClose?: () => Promise<void>;
};
