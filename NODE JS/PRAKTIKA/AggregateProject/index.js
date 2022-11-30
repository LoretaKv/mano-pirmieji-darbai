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

app.get("/users", async (req, res) => {
  const { userName, orderCompleted } = req.body;
  console.log(req.body);

  const pipeline = [
    {
      $match: {
        userName,
      },
    },
    {
      $group: {
        _id: "$orderCompleted",
        totalOrders: { $count: "$true" },
      },
    },
    {
      $sort: {
        totalOrders: -1,
      },
    },
  ];
  try {
    const docs = [];
    const con = await client.connect();
    const db = con.db("orders-project");
    const collection = db.collection("users");
    const sortedUserNames = await collection.distinct("userName");
    const userNameCount = await collection.count({});
    const aggregationCursor = collection.aggregate(pipeline);
    for await (const doc of aggregationCursor) {
      docs.push(doc);
    }
    await con.close();
    res.send({ sortedUserNames, userNameCount, docs }).end();
  } catch (error) {
    res.status(500).send({ error }).end();
    throw Error(error);
  }
});

app.post("/users", async (req, res) => {
  const newUsers = req.body;
  const areUsersProvided = Array.isArray(newUsers) && newUsers?.length;

  const isCorrectUser = (newUser) => {
    const { userName, orderCompleted } = newUser;
  };

  if (!areUsersProvided) {
    return res.status(400).send("Please provide an array of users").end();
  }

  newUsers.forEach(isCorrectUser);

  // identiska kaip virs jos
  // newOrders.forEach((newOrder) => isCorrectOrder(newOrder));

  try {
    const con = await client.connect();
    const user = await con
      .db("orders-project")
      .collection("users")
      .insertMany(newUsers);

    await con.close();

    return res.send(user);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.listen(PORT, () => console.log(`server is running on port:${PORT}`));
