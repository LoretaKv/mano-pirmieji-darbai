const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const PORT = 5001;
const app = express();
const URI = process.env.URI;
const client = new MongoClient(URI);

const users = [{ name: "Jonas" }, { name: "Tomas" }, { name: "Erika" }];

app.use(express.json());
app.use(cors());

app.get("/users/:user", async (_, res) => {
  const connection = await client.connect();
  const data = await connection
    .db("node-mongo-first-project")
    .collection("users")
    .find()
    .toArray();
  await connection.close();
  return res.send(data);
});

app.post("/", async (req, res) => {
  // const { firstName, lastName } = req.body;
  // console.log(req.body);
  // if (!firstName && !lastName) {
  //   return res.status(404).send("No name was provided");
  // }
  try {
    const con = await client.connect();
    const dbRes = await con
      .db("node-mongo-first-project")
      .collection("users")
      .insertOne({ firstName: "Greta", lastName: "Aleks" });
    await con.close();
    return res.send(dbRes);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.listen(PORT, () => console.log(`server is running on port:${PORT}`));
