import React, { useState } from 'react';

const Contact = ({ colorTheme, setColorTheme }) => {
    const themes = {
        purple: {
            topBar: 'bg-purple-900',
            navGradient:
                'bg-gradient-to-r from-black via-purple-900 to-purple-500',
            heroGradient:
                'bg-gradient-to-r from-black via-purple-900 to-purple-500',
            hoverText: 'hover:text-purple-200',
            button: 'bg-purple-600 hover:bg-purple-700',
            contactButton: 'text-purple-900 hover:bg-purple-50',
            dropdownHover: 'hover:bg-purple-50',
            decorCircle1: 'bg-purple-700',
            decorCircle2: 'bg-purple-300',
            textColor: 'text-purple-800',
            borderColor: 'border-purple-200',
            blobColor: 'from-purple-500/30 to-purple-300/20',
            iconColor: 'text-purple-500',
            lightBg: 'bg-purple-50',
            gradientStart: '#7e22ce',
            gradientEnd: '#a855f7',
        },
        teal: {
            topBar: 'bg-teal-900',
            navGradient: 'bg-gradient-to-r from-black via-teal-900 to-teal-500',
            heroGradient:
                'bg-gradient-to-r from-black via-teal-900 to-teal-500',
            hoverText: 'hover:text-teal-200',
            button: 'bg-teal-600 hover:bg-teal-700',
            contactButton: 'text-teal-900 hover:bg-teal-50',
            dropdownHover: 'hover:bg-teal-50',
            decorCircle1: 'bg-teal-700',
            decorCircle2: 'bg-teal-300',
            textColor: 'text-teal-800',
            borderColor: 'border-teal-200',
            blobColor: 'from-teal-500/30 to-teal-300/20',
            iconColor: 'text-teal-500',
            lightBg: 'bg-teal-50',
            gradientStart: '#0d9488',
            gradientEnd: '#14b8a6',
        },
        emerald: {
            topBar: 'bg-emerald-900',
            navGradient:
                'bg-gradient-to-r from-black via-emerald-900 to-emerald-500',
            heroGradient:
                'bg-gradient-to-r from-black via-emerald-900 to-emerald-500',
            hoverText: 'hover:text-emerald-200',
            button: 'bg-emerald-600 hover:bg-emerald-700',
            contactButton: 'text-emerald-900 hover:bg-emerald-50',
            dropdownHover: 'hover:bg-emerald-50',
            decorCircle1: 'bg-emerald-700',
            decorCircle2: 'bg-emerald-300',
            textColor: 'text-emerald-800',
            borderColor: 'border-emerald-200',
            blobColor: 'from-emerald-500/30 to-emerald-300/20',
            iconColor: 'text-emerald-500',
            lightBg: 'bg-emerald-50',
            gradientStart: '#059669',
            gradientEnd: '#10b981',
        },
        blue: {
            topBar: 'bg-blue-900',
            navGradient: 'bg-gradient-to-r from-black via-blue-900 to-blue-500',
            heroGradient:
                'bg-gradient-to-r from-black via-blue-900 to-blue-500',
            hoverText: 'hover:text-blue-200',
            button: 'bg-blue-600 hover:bg-blue-700',
            contactButton: 'text-blue-900 hover:bg-blue-50',
            dropdownHover: 'hover:bg-blue-50',
            decorCircle1: 'bg-blue-700',
            decorCircle2: 'bg-blue-300',
            textColor: 'text-blue-800',
            borderColor: 'border-blue-200',
            blobColor: 'from-blue-500/30 to-blue-300/20',
            iconColor: 'text-blue-500',
            lightBg: 'bg-blue-50',
            gradientStart: '#1d4ed8',
            gradientEnd: '#3b82f6',
        },
        rose: {
            topBar: 'bg-rose-900',
            navGradient: 'bg-gradient-to-r from-black via-rose-900 to-rose-500',
            heroGradient:
                'bg-gradient-to-r from-black via-rose-900 to-rose-500',
            hoverText: 'hover:text-rose-200',
            button: 'bg-rose-600 hover:bg-rose-700',
            contactButton: 'text-rose-900 hover:bg-rose-50',
            dropdownHover: 'hover:bg-rose-50',
            decorCircle1: 'bg-rose-700',
            decorCircle2: 'bg-rose-300',
            textColor: 'text-rose-800',
            borderColor: 'border-rose-200',
            blobColor: 'from-rose-500/30 to-rose-300/20',
            iconColor: 'text-rose-500',
            lightBg: 'bg-rose-50',
            gradientStart: '#be123c',
            gradientEnd: '#fb7185',
        },
    };

    const currentTheme = themes[colorTheme];

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form logic would go here
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({ name: '', email: '', message: '' });
    };

    return (
       
    );
};

export default Contact;
