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
        type: "Food",
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

app.patch("/order/:id", async (req, res) => {
  const { id } = req.params;
  const { type, item, quantity } = req.body;
  try {
    const con = await client.connect();
    const db = con.db("orders-project");

    const order = await db
      .collection("orders")
      .findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: { type, item, quantity } }
      );

    await con.close();

    res.send(order).end();
  } catch (error) {
    return res.send({ error }).end();
  }
});

app.delete("/order/order/:id", async (req, res) => {
  const { id } = req.params;
  const { type, item, quantity } = req.body;
  try {
    const con = await client.connect();
    const db = con.db("orders-project");

    const order = await db
      .collection("orders")
      .deleteOne({ _id: ObjectId(id) });

    await con.close();

    res.send(order).end();
  } catch (error) {
    return res.send({ error }).end();
  }
});

app.post("/orders", async (req, res) => {
  const newOrders = req.body;
  const areOrdersProvided = Array.isArray(newOrders) && newOrders?.length;

  const isCorrectOrder = (newOrder) => {
    const { type, item, quantity } = newOrder;
    console.log(newOrder);
  };

  if (!areOrdersProvided) {
    return res.status(400).send("Please provide an array of objects").end();
  }

  newOrders.forEach(isCorrectOrder);

  // identiska kaip virs jos
  // newOrders.forEach((newOrder) => isCorrectOrder(newOrder));

  try {
    const con = await client.connect();
    const order = await con
      .db("orders-project")
      .collection("orders")
      .insertMany(newOrders);

    await con.close();

    return res.send(order);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.listen(PORT, () => console.log(`server is running on port:${PORT}`));
