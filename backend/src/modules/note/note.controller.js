import Note from "./note.model.js";

export async function getAllNotes(request, response) {
  try {
    const note = await Note.find({});
    response.status(200).json(note);
  } catch (error) {
    console.log("ERR [DB] => Error in getAllNotes controller");
    response.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getNoteById(request, response) {
  try {
    const { id } = request.params;
    const note = await Note.find({ _id: id });
    response.status(200).json(note);
  } catch (error) {
    console.log("ERR [DB] => Error in getAllNotes controller");
    response.status(500).json({ message: "Internal Server Error" });
  }
}

export async function createNote(request, response) {
  try {
    const { title, content } = request.body;
    const note = new Note({
      title,
      content,
    });
    await note.save();
    response.status(201).json({ message: "Success!" });
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal Server Error" });
  }
  response.status(200).send("C Operation [OK]");
}

export async function updateNote(request, response) {
  try {
    const { id } = request.params;
    const { title, content } = request.body;
    const note = await Note.findByIdAndUpdate(id, { title, content });
    if (!note) {
      response.status(404).json({ message: "Note not found" });
    }
    response.status(200).json("Note updated successfully");
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Internal Server Error" });
  }
}

export async function deleteNote(request, response) {
  try {
    const { id } = request.params;
    const deletedNote = await Note.findByIdAndDelete(id);
    if (!deletedNote) {
      response.status(404).json({ message: "Note not found" });
    } else {
      response.status(200).json({ message: "Note deleted successfully" });
    }
  } catch (err) {
    console.log(err);
    response.status(500).json({ message: "Internal Server Error" });
  }
}
