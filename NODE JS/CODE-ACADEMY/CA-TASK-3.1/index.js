const express = require("express");
const cors = require("cors");
// require("dotenv").config();

const PORT = 5001;
const app = express();

const names = ["Birute", "Juozas", "Albinas"];
console.log(names);

app.use(express.json());
app.use(cors());

app.get("/", (_, res) => {
  res.send(names);
});

app.post("/", (req, res) => {
  const name = req.body.name;

  names.push(name);
  res.send(names);
});

app.listen(PORT, () => console.log(`server is running on: ${PORT}`));
