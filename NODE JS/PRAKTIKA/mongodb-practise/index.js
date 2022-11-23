const express = require("express");
const cors = require("cors");
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const PORT = +process.env.PORT || 5000;
const URI = process.env.URI;
const client = new MongoClient(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

app.use(express.json());
app.use(cors());

app.get("/order", async (req, res) => {
  const { type } = req.params;
  console.log(req.params);
  const con = await client.connect();
  const getOrders = await con
    .db("orders-project")
    .collection("orders")
    .find()
    .toArray();

  await con.close();
  return res.send(getOrders);
});

app.post("/order", async (_, res) => {
  try {
    const date = new Date().toLocaleString();
    const dateWhenCompleted = new Date().toLocaleString();

    const con = await client.connect();
    const dbRes = await con
      .db("orders-project")
      .collection("orders")
      .insertOne({
        orderDate: date,
        class: "Food",
        item: "Tomato",
        quantity: 6,
        orderCompleted: dateWhenCompleted,
      });

    await con.close();
    return res.send(dbRes);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.patch("/order", async (req, res) => {
  const { id } = req.params;
  const { class, item, quantity } = req.body;

  // todo: test whether age, firstName, lastName are provided properly
  try {
    const con = await client.connect();
    const db = con.db("orders-project");

    const user = await db.collection("orders").findOneAndUpdate(
      { _id: ObjectId(id) }
      { $set: { class, item, quantity } }
    );

    await con.close();

    res.send(user).end();
  } catch (error) {
    return res.send({ error }).end();
  }
});

app.listen(PORT, () => console.log(`server is running on port:${PORT}`));
