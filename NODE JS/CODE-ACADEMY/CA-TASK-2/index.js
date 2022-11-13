const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = +process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());

const cars = ["BMW", "BENTLEY", "TOYOTA"];

console.log(PORT);

app.get("/", (req, res) => {
  console.log(req.body);
  res.send(cars);
});

app.listen(PORT, () => console.log(`server is running on port:${PORT}`));
