const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 5000;

app.use(express.json());
app.use(cors());

const products = ["Milk", "Bread", "Fruits"];

app.get("/product/:productName", (req, res) => {
  const { productName } = req.params;
  const product = products.find(
    (curProduct) => curProduct.productName === productName
  );
  console.log(product);
  res.send(product).end();
});

app.post("/add-product", (req, res) => {
  const { type, price } = req.body;

  const product = { type, price };

  products.push(product);

  res.end();
});

app.listen(PORT, () => console.log(`server is running on port:${PORT}`));
