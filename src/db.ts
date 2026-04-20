import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log('Połączono z bazą MongoDB');
    } catch (error) {
        console.error('Błąd połączenia z bazą:', error);
        process.exit(1);
    }
};