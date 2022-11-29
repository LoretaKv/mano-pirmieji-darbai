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

app.get;

app.post("/users", async (req, res) => {
  const newUsers = req.body;
  console.log(req.body);
  const areUsersProvided = Array.isArray(newUsers) && newUsers?.length;

  const isCorrectUser = (newUser) => {
    const { name, orderCompleted } = newUser;
  };

  if (!areUsersProvided) {
    return res.status(400).send("Please provide an array of objects").end();
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
