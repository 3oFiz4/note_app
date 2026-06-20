import express from "express";
import noteR from "../modules/note/note.routes.js";
import connectDB from "../config/db.js";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

const $ = express();
const PORT = process.env.PORT || 5001;

connectDB();

$.use(express.json());

$.use("/api/note", noteR);

$.listen(PORT, () => {
  console.log(`Open:${PORT}`);
});
