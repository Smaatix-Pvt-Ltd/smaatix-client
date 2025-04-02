import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log('Connected to MongoDB');
        });

        mongoose.connection.on('error', (err) => {
            console.error(`MongoDB connection error: ${err}`); // Use console.error for errors
            process.exit(1); // Exit the process on connection error
        });

        mongoose.connection.on('disconnected', () => {
            console.log('MongoDB disconnected');
        });

        mongoose.set('strictQuery', false); // Recommended for Mongoose v7+

        await mongoose.connect(`${process.env.MONGODB_URL}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error}`);
        process.exit(1); // Exit the process on initial connection failure
    }
};

export default connectDB;
