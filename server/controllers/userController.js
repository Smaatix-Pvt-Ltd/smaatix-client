import User from '../models/userModel.js';

export const getUserData = async (req, res) => {
    try {
        const { userId } = req.body;
        const user = await User.findById(userId);
        if (!user) {
            return res
                .status(404)
                .json({ result: false, message: 'User not found' });
        }
        return res.status(200).json({
            result: true,
            userData: {
                id: user._id,
                name: user.name,
                isVerified: user.isVerified,
            },
        });
    } catch (error) {
        return res.status(500).json({ result: false, message: error.message });
    }
};
