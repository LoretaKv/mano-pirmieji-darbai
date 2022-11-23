const express = require("express");
const cors = require("cors");
const app = express();
const { MongoClient } = require("mongodb");
require("dotenv").config();

const PORT = +process.env.PORT || 5000;
const URI = process.env.URI;
const client = new MongoClient(URI);

app.use(express.json());
app.use(cors());

app.get("/pets/:type", async (req, res) => {
  const { type } = req.params;
  console.log(req.params);
  const con = await client.connect();
  const filteredPets = await con
    .db("pets-project")
    .collection("pets")
    .find({ type })
    .sort({ age: -1 })
    .toArray();

  await con.close();
  return res.send(filteredPets);
});

app.post("/", async (_, res) => {
  //   const { name, type, age } = req.body;
  //   console.log(req.body);
  //   if (!name && !type && !age) {
  //     return res.status(404).send("Incorrect details was provided");
  //   }
  try {
    const con = await client.connect();
    const dbRes = await con
      .db("pets-project")
      .collection("pets")
      .insertOne({ name: "Amsis", type: "Cat", age: 2 });

    await con.close();
    return res.send(dbRes);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.listen(PORT, () => console.log(`server is running on port:${PORT}`));
