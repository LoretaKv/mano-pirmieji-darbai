import express from "express";
import dotenv from "dotenv";
import { Product } from "./src/models/Product.js";
import { createProduct, getProducts } from "./src/services/productService.js";

dotenv.config();

const app = express();
const PORT = +process.env.PORT || 5_000;

app.use(express.json());

console.log(getProducts());

createProduct({
  name: "book",
  price: 25,
  isAvailable: true,
  imageURL:
    "https://images.unsplash.com/photo-1436891620584-47fd0e565afb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmVydGljYWwlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&w=1000&q=80",
});

console.log(getProducts());

app.listen(PORT, () => console.log(`server is running on port:${PORT}`));
