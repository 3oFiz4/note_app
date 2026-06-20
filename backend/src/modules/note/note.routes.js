import express from "express";
import {
  getAllNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNote,
} from "./note.controller.js";

const R = express.Router();

R.get("/", getAllNotes);
// R.get("/", removeAllNotes); // what the fuck?
R.get("/:id", getNoteById);
R.post("/", createNote);
R.put("/:id", updateNote);
R.delete("/:id", deleteNote);

export default R;
