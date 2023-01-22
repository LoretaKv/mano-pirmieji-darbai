import express from "express";
import cors from "cors";
import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5004;

const MYSQL_CONFIG = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  port: process.env.port,
  database: process.env.database,
};

app.post("/table", async (req, res) => {
  try {
    const con = await mysql.createConnection(MYSQL_CONFIG);
    const name = req.body?.name.trim();

    console.log(name);

    await con.execute(
      `CREATE table ${name}(id int NOT NULL AUTO_INCREMENT, title varchar(30),image varchar (2000),price DECIMAL(7,2),numberplate varchar(6), PRIMARY KEY (id))`
    );
  } catch (err) {
    res.status(500).send(err).end();
    return console.error({ err });
  }
  res.send("table was ceated").end();
});

app.listen(PORT, () => console.log(`Server is running on Port:${PORT}`));
