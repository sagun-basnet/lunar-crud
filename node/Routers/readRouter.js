import express from "express";
import { read } from "../Controller/read.js";

const router = express.Router();

router.get("/read", read);

export default router;
