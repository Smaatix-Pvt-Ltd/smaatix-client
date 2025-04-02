import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import transporter from '../config/nodemailer.js';

export const register = async (req, res) => {
    const { name, username, email, password } = req.body;

    if (!name || !username || !email || !password) {
        return res.json({
            succes: false,
            message: 'Please fill in all fields',
        });
    }
    try {
        //Check whether email is taken or not
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({
                success: false,
                message: 'User already exists please change email id',
            });
        }
        //Check whether username is taken or not
        const existingUserByUsername = await User.findOne({ username });
        if (existingUserByUsername) {
            return res.json({
                success: false,
                message: 'Username already taken',
            });
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({
            name,
            username,
            email,
            password: hashedPassword,
        });
        await user.save();
        const userId = await User.findOne({ email }).select('_id');
        const token = jwt.sign(
            { id: userId }, // ✅ Ensure the payload includes 'id'
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });
        //sending welcome Email
        const mailOption = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: 'Welcome to our app',
            text: `Hello ${name}, Welcome to our app. We are glad to have you.`,
        };

        transporter.sendMail(mailOption, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });

        return res.status(201).json({
            success: true,
            message: 'User registered successfully',
        });
    } catch (error) {
        console.error(`Error registering user: ${error}`);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res
            .status(400)
            .json({ success: false, message: 'Please fill in all fields' });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res
                .status(400)
                .json({ success: false, message: 'Invalid credentials' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res
                .status(400)
                .json({ success: false, message: 'Invalid Password' });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '7d',
        });
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        return res.status(200).json({
            success: true,
            message: 'User logged in successfully',
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Server error: ' + error,
        });
    }
};

export const logout = async (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        });
        return res.status(200).json({
            success: true,
            message: 'User logged out successfully',
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Server error: ' + error,
        });
    }
};

export const sendVerificationEmail = async (req, res) => {
    try {
        const { userId } = req.body;

        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found',
            });
        }
        if (user.isAccountVerified) {
            return res.json({
                success: false,
                message: 'Account already verified',
            });
        }

        const otp = String(Math.floor(100000 + Math.random() * 900000));
        user.verifyOtp = otp;
        user.verifyOtpExpiresAt = Date.now() + 10 * 60 * 1000;

        await user.save();

        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: 'Email Verification',
            text: `Your verification code is: ${otp}`,
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });

        return res.status(200).json({
            success: true,
            message: 'Verification email sent successfully',
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Server error: ' + error,
        });
    }
};

export const verifyAccount = async (req, res) => {
    const { userId, otp } = req.body;
    if (!userId) {
        return res.json({
            success: false,
            message: 'Missing UserId Details',
        });
    }
    if (!otp) {
        return res.json({
            success: false,
            message: 'Fill the otp',
        });
    }
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.json({
                success: false,
                message: 'User not found',
            });
        }
        if (user.isAccountVerified) {
            return res.json({
                success: false,
                message: 'Account already verified',
            });
        }
        if (user.verifyOtp !== otp || user.verifyOtp === '') {
            return res.json({
                success: false,
                message: 'Invalid OTP',
            });
        }
        if (user.verifyOtpExpiresAt < Date.now()) {
            return res.json({
                success: false,
                message: 'OTP has expired',
            });
        }

        user.isVerified = true;
        user.verifyOtp = '';
        user.verifyOtpExpiresAt = 0;
        await user.save();

        return res.status(200).json({
            success: true,
            message: 'Account verified successfully',
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Server error: ' + error,
        });
    }
};

export const isAuthenticated = async (req, res) => {
    try {
        const { userId } = req.body;

        const user = await User.findById(userId);
        const isVerified = user.isVerified;
        if (!isVerified) {
            return res.json({
                success: false,
                message: 'User is not authenticated',
            });
        }
        return res.status(200).json({
            success: true,
            message: 'User is authenticated',
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Server error: ' + error,
        });
    }
};

export const sendResetOtp = async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res
            .status(400)
            .json({ success: false, message: 'Please provide email' });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res
                .status(404)
                .json({ success: false, message: 'User not found' });
        }
        const otp = String(Math.floor(100000 + Math.random() * 900000));
        user.resetOtp = otp;
        user.resetOtpExpiresAt = Date.now() + 10 * 60 * 1000;
        await user.save();

        const emailOptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: 'Reset Password',
            html: `
                <h1>Reset Password</h1>
                <p>Your reset password otp is: ${otp}</p>
            `,
        };

        transporter.sendMail(emailOptions);

        return res.status(200).json({
            success: true,
            message: 'OTP sent successfully',
        });
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: 'Server error: ' + error });
    }
};

export const resetPassword = async (req, res) => {
    const { email, otp, newPassword } = req.body;

    if (!email || !otp || !newPassword) {
        return res.json({ success: false, message: 'Missing required fields' });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: 'User not found' });
        }

        if (user.resetOtp !== otp || user.resetOtp === '') {
            return res.json({ success: false, message: 'Invalid OTP' });
        }

        if (user.resetOtpExpiresAt < Date.now()) {
            return res.json({ success: false, message: 'OTP has expired' });
        }
        const hashedPassword = await bcrypt.hash(newPassword, 12);
        user.password = hashedPassword;
        user.resetOtp = '';
        user.resetOtpExpiresAt = 0;
        await user.save();

        return res.status(200).json({
            success: true,
            message: 'Password reset successfully',
        });
    } catch (error) {
        return res
            .status(500)
            .json({ success: false, message: 'Server error: ' + error });
    }
};
