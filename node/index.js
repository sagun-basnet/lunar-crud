import express from "express";
import db from "./db.js";

const app = express();

app.listen(5500, () => {
  console.log("server is running on port 5500");
});
