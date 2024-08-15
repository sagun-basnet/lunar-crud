import express from "express";
import db from "./db.js";
import createRouter from "./Routers/createRouter.js";
import readRouter from "./Routers/readRouter.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/", createRouter);
app.use("/", readRouter);

app.listen(5500, () => {
  console.log("server is running on port 5500");
});
