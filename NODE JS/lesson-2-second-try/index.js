const express = require("express");

const app = express();
const PORT = 5_000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ age: body.age * 2 });
});

app.post("/", (req, res) => {
  console.log({ requestBody: req.body });
  const age = req.body.age || 5;

  res.send({ ageTimesTwo: age * 2 });
});

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
