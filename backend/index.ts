import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { registerRoutes } from "./routes";

// Load environment variables
config();

const app = express();

// Configure CORS
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:3000",
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Register routes
const server = registerRoutes(app);

const PORT = process.env.PORT || 5000;
server.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend server running on port ${PORT}`);
});
