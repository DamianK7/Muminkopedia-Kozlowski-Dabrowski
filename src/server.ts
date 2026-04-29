import express from 'express';
import { connectDB } from './db';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: "✅ Muminkopedia API - Serwer działa poprawnie!",
        status: "success",
        endpoints: {
            characters: "/api/characters",
            artifacts: "/api/artifacts"
        }
    });
});

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`🚀 Serwer Muminkopedia działa na http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Błąd startu serwera:', error);
    }
};

startServer();