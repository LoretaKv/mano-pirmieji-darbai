import { Router } from "express";
import { getProducts } from "../services/productServices.js";

const router = Router();

router.get("/", getProducts);

export default router;
