export function getAllNotes(request, response) {
  response.status(200).send("All note GET'd");
}

export function createNote(request, response) {
  response.status(200).json({ message: "Success!" });
}

export function updateNote(request, response) {
  response.status(200).json({ message: "Success!" });
}

export function deleteNote(request, response) {
  response.status(200).json({ message: "Success!" });
}
