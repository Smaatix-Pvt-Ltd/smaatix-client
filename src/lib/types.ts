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
    identifier: z
        .string()
        .min(1, { message: 'Email, Phone Number or Username is required' }),
    password: z
        .string() 
        .min(6, { message: 'Password must be at least 6 characters' }),
});

export type LoginFormData = z.infer<typeof loginSchema>;
