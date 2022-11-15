const express = require("express");

const cors = require("cors");

const app = express();

const PORT = 5001;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => console.log(`server is running on port:${PORT}`));

app.get("/data.json", (req, res) => {
  console.log(req.params.email);
  //   const { id, first_name, last_name, email, gender, car } = req.body;
  res.send().end();
});
