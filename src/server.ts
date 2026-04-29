import app from './app';
import { connectDB } from './db';

const PORT = process.env.PORT || 3001;   // <-- zmienione na 3001

const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`🚀 Serwer Muminkopedia działa na http://localhost:${PORT}`);
            console.log(`🔗 Główny endpoint: http://localhost:${PORT}/`);
            console.log(`🔗 Postacie: http://localhost:${PORT}/api/characters`);
        });
    } catch (error) {
        console.error('❌ Nie udało się uruchomić serwera:', error);
    }
};

startServer();