const express = require("express");
const mysql = require("mysql2/promise");
require("dotenv").config();

const app = express();
app.use(express.json());

const serverPort = process.env.serverPort || 5001;

const MYSQL_CONFIG = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  port: process.env.port,
  database: process.env.database,
};
console.log(MYSQL_CONFIG);

app.post("/table", async (req, res) => {
  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    const name = req.body?.name.trim();

    await con.execute(
      `CREATE table ${name}(id int NOT NULL AUTO_INCREMENT, brand varchar(20),model varchar(25),size varchar(3), price DECIMAL(10,2),PRIMARY KEY (id) )`
    );
  } catch (err) {
    res.status(500).send(err).end();
    return console.error({ err });
  }
  res.send("table was ceated").end();
});

app.get("/", (_, res) => {
  res.send("Server is Running").end();
});

app.post("/shirts", async (req, res) => {
  const id = req.body?.id;
  const model = req.body?.model?.trim();
  const brand = req.body?.brand?.trim();
  const size = req.body?.size?.trim();
  const price = req.body?.price;

  console.log(id, brand, model, size, price);
  if (!id || !brand || !model || !size || !price) {
    return res.status(400).send(`Incorrect data provided`).end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    await con.execute(
      `INSERT INTO shirts (id,brand,model,size,price) VALUES ('${id}','${brand}','${model}','${size}','${price}')`
    );
    await con.end();

    res.status(201).send("Data added successfully").end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
});

app.get("/shirts", async (req, res) => {
  const size = req.query.size;
  const limit = req.query.limit;
  console.log(size, limit);

  //shirts?size=s&&limit=2

  const query =
    size && limit
      ? `SELECT *FROM shirts WHERE size='${size}' ORDER BY price LIMIT ${limit}`
      : `SELECT *FROM shirts`;

  console.log(query);

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    const result = await con.execute(query);

    await con.end();
    res.send(result[0]).end;
  } catch (err) {
    res.send(err).end();
    return console.error();
  }
});

app.listen(serverPort, () => console.log(`Sever is running on ${serverPort}`));
