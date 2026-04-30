import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import { connectDB } from "./db";

import characterRoutes from "./routes/characterRoutes";
import artifactRoutes from "./routes/artifactRoutes";
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));


app.use('/api/characters', characterRoutes);
app.use('/api/artifacts', artifactRoutes);


app.get("/", (req, res) => {
    res.json({
        message: "Muminkopedia API działa poprawnie! 🚀",
        endpoints: {
            characters: "/api/characters",
            artifacts: "/api/artifacts"
        }
    });
});

app.get("/api/characters", (req, res) => {
    res.json([
        { name: "Muminek" },
        { name: "Mała Mi" }
    ]);
});

app.use(errorHandler);

export default app;