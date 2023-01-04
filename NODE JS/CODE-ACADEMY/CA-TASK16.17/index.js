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

app.post("/table", async (req, res) => {
  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    const name = req.body?.name.trim();

    await con.execute(
      `CREATE table ${name}(id int NOT NULL AUTO_INCREMENT, title varchar(30),image varchar (2000),price DECIMAL(7,2),numberplate varchar(6), PRIMARY KEY (id) )`
    );
  } catch (err) {
    res.status(500).send(err).end();
    return console.error({ err });
  }
  res.send("table was ceated").end();
});

app.post("/cars", async (req, res) => {
  const id = req.body?.id;
  const title = req.body?.title?.trim();
  const image = req.body?.image?.trim();
  const price = req.body?.price;
  const numberplate = req.body?.numberplate.trim();

  console.log(id, title, image, price, numberplate);
  if (!id || !title || !image || !price || !numberplate) {
    return res.status(400).send(`Incorrect car details provided`).end();
  }

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);

    await con.execute(
      `INSERT INTO cars (id,title,image,price,numberplate) VALUES ('${id}','${title}','${image}','${price}','${numberplate}')`
    );
    await con.end();

    res.status(201).send("Car to database added successfully").end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
});

app.get("/cars", async (_, res) => {
  const query = `SELECT *FROM cars  `;

  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    const result = (await con.execute(query))[0];
    console.log(result);

    await con.end();
    res.send(result).end;
  } catch (err) {
    res.send(err).end();
    return console.error();
  }
});

app.delete("/cars/:id", async (req, res) => {
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

    await con.execute(`DELETE FROM cars WHERE id = ${cleanId}`);

    await con.end();

    res.status(202).send("Car successfully deleted").end();
  } catch (err) {
    res.status(500).send(err).end();
    return console.error(err);
  }
});

app.listen(SERVERPORT, () =>
  console.log(`Server is running on PORT ${SERVERPORT}`)
);
