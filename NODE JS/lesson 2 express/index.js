const express = require("express");

const app = express();

const PORT = 5000;

app.use(express.json());
// app.use(cors());

app.post("/tshirt", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({ message: "We need a logo" });
  }
  res.send({
    tshirt: `logo with your ${logo} and ID of ${id}`,
  });
});

// app.get("/", (req, resp) => {
//   resp.send("ok");
// });

// app.listen(5000, () => console.log("the server is running on port 5000"));
