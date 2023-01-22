import express from "express";
import dotenv from "dotenv";
import { PORT } from "./config.js";

dotenv.config();

const app = express();

app.use(express.json());

app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
