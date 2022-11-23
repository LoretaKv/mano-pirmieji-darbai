const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const app = express();

const PORT = +process.env.PORT || 5000;
const URI = process.env.URI;
const client = new MongoClient(URI);

app.use(express.json());
app.use(cors());

app.get("/pets/pets", async (req, res) => {
  //   const { type } = req.params;
  //   console.log(req.params);
  const con = await client.connect();
  const filteredPets = await con
    .db("pets-project")
    .collection("pets")
    .find()
    .sort()
    .toArray();

  await con.close();
  return res.send(filteredPets);
});

app.post("pets/", async (req, res) => {
  //   if (!req.body.name || !req.body.age || req.body.type) {
  //     return res.status(400).send({ err: "Incorect data entered" });
  //   }
  try {
    const con = await client.connnet();
    const dbResult = await con.db("pets-project").collection("pets").insertOne({
      name: req.body.name,
      age: req.body.age,
      type: req.body.type,
    });
    console.log(req.body.age);
    await con.colose();
    return res.send(dbResult);
  } catch (err) {
    return res.status(500).send(err);
  }
});
app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
