const mysql = require("mysql2/promise");
const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const SERVERPORT = process.env.SERVERPORT || 5000;

const MYSQL_CONFIG = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  port: process.env.port,
  database: process.env.database,
};
console.log(MYSQL_CONFIG);

app.get("/items", async (req, res) => {
  const limit = req.query.limit;

  //shirts?size=s&&limit=2

  const query = `SELECT *FROM items  LIMIT ${limit}`;

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

app.post("/table", async (req, res) => {
  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    const name = req.body?.name.trim();

    await con.execute(
      `CREATE table ${name}(id int NOT NULL AUTO_INCREMENT, title TEXT, PRIMARY KEY (id) )`
    );
  } catch (err) {
    res.status(500).send(err).end();
    return console.error({ err });
  }
  res.send("table was ceated").end();
});

app.post("/items", async (req, res) => {
  const id = mysql.escape(req.body.id);
  const title = req.body.title.trim();

  if (!id || !title) {
    res.status(400).send("Id or title provided are incorrect");
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    await con.execute(
      `INSERT INTO items (id, title) VALUES ('${id}', '${title}')`
    );

    await con.end();

    res.status(201).send("Item were succesuffuly added to the table");
  } catch (err) {
    res.send(err).end();
    return console.error();
  }
});

app.delete("/items/:id", async (req, res) => {
  const id = mysql.escape(req.params.id.trim());
  console.log({ id });

  const cleanId = +id.replaceAll("'", "");
  console.log({ cleanId });

  if (cleanId < 0 || Number.isNaN(cleanId) || typeof cleanId !== "number") {
    return res
      .status(400)
      .send({
        error: `Please provide a proper id in the URL: current id ${cleanId} incorrect.`,
      })
      .end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    await con.execute(`DELETE FROM items WHERE id = ${cleanId}`);

    await con.end();

    res.status(202).send("Item successfully deleted").end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
});

app.listen(SERVERPORT, () =>
  console.log(`Server is running on PORT ${SERVERPORT}`)
);
