import express from "express";
const router = express.Router();
import {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from "../Controllers/product.controller.js";

router.post("/", createProduct);

router.delete("/:id", deleteProduct);

router.get("/", getProducts);

router.put("/:id", updateProduct);

export default router;
