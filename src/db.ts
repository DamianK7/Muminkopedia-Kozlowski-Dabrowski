import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async (): Promise<void> => {
    try {
        const mongoUri = process.env.MONGO_URI;

        if (!mongoUri) {
            throw new Error('MONGO_URI nie jest zdefiniowany w pliku .env');
        }

        await mongoose.connect(mongoUri);
        console.log('✅ Połączono z bazą MongoDB');
    } catch (error: any) {
        console.error('❌ Błąd połączenia z bazą MongoDB:', error.message);
        process.exit(1);
    }
};