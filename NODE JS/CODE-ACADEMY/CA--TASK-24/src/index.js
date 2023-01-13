import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import auth from "../routes/auth.js";
dotenv.config();

const PORT = process.env.SERVERPORT || 5005;

const app = express();
app.use(express.json());
app.use(cors());
app.use("/auth", auth);

app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
