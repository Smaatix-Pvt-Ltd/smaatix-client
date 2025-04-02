import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import cookieParser from 'cookie-parser';
import connectDB from './Database/db.js';
import authRoter from './routes/authRoutes.js';
import UserRouter from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 4000;

// Database connection
connectDB();

const allowedOrigins = ['http://192.168.1.142:5173'];
// const corsOptions = {
//     origin: allowedOrigins,
//     credentials: true,
// };

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: allowedOrigins,
        credentials: true,
    })
);

//API Endpoints
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/api/auth', authRoter);
app.use('/api/user', UserRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
