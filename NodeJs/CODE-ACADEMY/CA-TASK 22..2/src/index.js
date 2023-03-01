import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import auth from "../routes/auth.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", auth);

app.get("/", (_, res) => {
  res.send({ msg: "Server is running" });
});

app.all("*", (req, res) => {
  res.status(404).send({ error: "Page not found" });
});

app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`));
