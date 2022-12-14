const express = require("express");
const cors = require("cors");
const app = express();
const { MongoClient } = require("mongodb");
require("dotenv").config();

const PORT = +process.env.PORT || 5003;
const URI = process.env.URI;
const client = new MongoClient(URI);

app.use(express.json());
app.use(cors());

app.get("/users/:user", async (_, res) => {
  const connection = await client.connect();
  const data = await connection
    .db("mongo-practice")
    .collection("people")
    .find()
    .toArray();
  await connection.close();
  return res.send(data);
});

app.post("/", async (req, res) => {
  const { firstName, lastName, age } = req.body;
  console.log(req.body);
  if (!firstName && !lastName && !age) {
    return res.status(404).send("Incorrect details was provided");
  }
  try {
    const con = await client.connect();
    const dbRes = await con
      .db("mongo-practice")
      .collection("people")
      .insertOne({ firstName: "Gele", lastName: "Uoga", age: 18 });
    await con.close();
    return res.send(dbRes);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.listen(PORT, async () => {
  console.log(`server is running on ${PORT}`);
});
