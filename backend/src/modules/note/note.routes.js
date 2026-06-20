import express from "express";
import {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
} from "./note.controller.js";

const R = express.Router();

R.get("/", getAllNotes);
R.post("/", createNote);
// localhost:5001/api/notes/(Any[int])
R.put("/:id", updateNote);
// localhost:5001/api/notes/(Any[int])
R.delete("/:id", deleteNote);

export default R;
