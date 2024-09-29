import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/db.js ";
import Product from "./models/product.model.js";

const app = express();
const port = 5000;
app.use(express.json());

app.post("/api/products", async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all the fields" });
  }
  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in creating product:", error.message);
    res.status(500).json({ sucess: false, message: "Server Error" });
  }
});

app.listen(port, () => {
  connectDB();
  console.log(`Server is active at http/localhost:${port}`);
});
