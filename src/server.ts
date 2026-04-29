import app from './app';
import { connectDB } from './db';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`🚀 Serwer Muminkopedia działa na http://localhost:${PORT}`);
            console.log(`🔗 Testowy endpoint: http://localhost:${PORT}/`);
        });
    } catch (error) {
        console.error('❌ Błąd uruchamiania serwera:', error);
    }
};

startServer();