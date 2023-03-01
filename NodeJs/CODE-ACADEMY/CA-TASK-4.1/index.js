const data = require("./data.js");

const express = require("express");

const cors = require("cors");

const app = express();

const PORT = 5001;

app.use(express.json());
app.use(cors());

app.get("/", (_, res) => {
  res.send(data).end();
});

app.get("/loretaRoute/:requiredNumber", (req, res) => {
  const number = +req.params.requiredNumber;

  const user = data.find((curUser) => curUser.id === number);

  if (!user) {
    return res.status(404).send("User does not exist").end();
  }

  res.send(user).end();
});

app.get("/car/:car", (req, res) => {
  const { car } = req.params;

  const findCustomersByCarModel = data.filter(
    (curCar) => curCar.car.toLocaleLowerCase() === car.toLocaleLowerCase()
  );

  res.send(findCustomersByCarModel).end();
});

app.get("/email", (_, res) => {
  const userEmails = data.map((user) => user.email);
  console.log(data);

  res.send(userEmails).end();
});

app.listen(PORT, () => console.log(`server is running on port:${PORT}`));
