const ENDPOINT = "data.json";

const express = require("express");

const cors = require("cors");

const app = express();

const PORT = 5001;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => console.log(`server is running on port:${PORT}`));

app.get("/", (_, res) => {
  res.send();
});
