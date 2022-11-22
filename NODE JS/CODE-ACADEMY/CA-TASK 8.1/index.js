const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const PORT = +process.env.PORT || 5000;
const app = express();
const URI = process.env.URI;
const client = new MongoClient(URI);

app.use(express.json());
app.use(cors());

const cars = [{ name: "BMW" }, { name: "FORD" }, { name: "AUDI" }];

app.get("/cars", async (_, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db("mongo-first-project")
      .collection("cars")
      .find({ cars })
      .toArray();
    await con.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
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
      .db("mongo-first-project")
      .collection("cars")
      .insertOne({ firsCar: "Skoda", secondCar: "kia" });
    await con.close();
    return res.send(dbRes);
  } catch (err) {
    res.status(500).send({ err });
  }
});
app.listen(PORT, () => console.log(`server is running on port:${PORT}`));
