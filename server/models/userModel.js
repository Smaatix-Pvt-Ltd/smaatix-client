import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        verifyOtp: {
            type: String,
            default: '',
        },
        verifyOtpExpiresAt: {
            type: Number,
            default: 0,
        },
        isVerified: {
            type: Boolean,
            default: false,
        },
        resetOtp: {
            type: String,
            default: '',
        },
        resetOtpExpiresAt: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

const User = mongoose.models.user || mongoose.model('User', userSchema);

export default User;
