import express from "express";

const app = express();

app.listen(5000, () => {
  console.log("Server is active at http/local:5000");
});
