import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
    try {
        // Check if token exists in cookies
        const { token } = req.cookies;
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Please log in.',
            });
        }

        // Verify JWT Token
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        console.log(tokenDecode.id);
        if (!tokenDecode || !tokenDecode.id) {
            return res.status(401).json({
                success: false,
                message: 'Invalid or expired token. Please log in again.',
            });
        }

        // Attach userId to request
        req.body.userId = tokenDecode.id;
        next();
    } catch (error) {
        console.error('JWT Verification Error:', error.message);
        return res.status(401).json({
            success: false,
            message: 'Unauthorized: Invalid or expired token.',
        });
    }
};

export default userAuth;
