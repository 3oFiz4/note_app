import mongoose from "mongoose";

const noteS = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Note = mongoose.model("Note", noteS);

export default Note;
