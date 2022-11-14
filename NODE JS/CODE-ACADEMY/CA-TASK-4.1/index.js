const express = require("express");
// const cors = require("cors");

require("dotenv").config();
const PORT = +process.env.PORT || 5000;

console.log(PORT);

const app = express();

app.use(express.json());
// app.use(cors());

app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
