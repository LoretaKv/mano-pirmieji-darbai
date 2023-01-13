import express from "express";
import cors from "cors";
import { PORT } from "./config.js";

import dotenv from "dotenv";
dotenv.config();
import { registerUser } from "../routes/auth.js";
import { signIn } from "../routes/auth.js";
import { getArticles } from "../routes/articles.js";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", registerUser);
app.post("/sign-in", signIn);
app.get("/articles", getArticles);

app.listen(PORT, () => console.log(`Server is runnig on port:${PORT}`));
