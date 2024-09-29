import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/db.js ";
import Product from "./models/product.model.js";
import mongoose from "mongoose";
import ProductRoutes from "./routes/product.route.js";
const app = express();
const port = 5000;
app.use(express.json());

app.use("/api/products", ProductRoutes);

app.listen(port, () => {
  connectDB();
  console.log(`Server is active at http/localhost:${port}`);
});
