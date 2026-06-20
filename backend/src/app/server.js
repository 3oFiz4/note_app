import express from "express";
import noteR from "../modules/note/note.routes.js";

const $ = express();

$.use("/api/note", noteR);

$.listen(5001, () => {
  console.log("Open:5001");
});
