import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/db.js ";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  connectDB();
  console.log(`Server is active at http/local:${port}`);
});
