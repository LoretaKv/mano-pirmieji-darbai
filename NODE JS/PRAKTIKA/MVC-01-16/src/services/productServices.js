import { Product } from "../models/Product.js";

const products = [
  new Product(16, "book", true),
  new Product(20, "car", false),
  new Product(25, "pen", true),
];

export const getProducts = (_, res) => {
  return res.send({ products }).end();
};
