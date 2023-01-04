const mysql = require("mysql2/promise");
const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const SERVERPORT = process.env.SERVERPORT || 5004;

const MYSQL_CONFIG = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  port: process.env.port,
  database: process.env.database,
};
console.log(MYSQL_CONFIG);

app.listen(SERVERPORT, () =>
  console.log(`Server is running on PORT ${SERVERPORT}`)
);
