import express from "express";
import "./src/";

const app = express();

app.get("/", (request, response) => {
  response.status(200).send("<h1>Hello Yod!</h1>");
});

app.get("/api/notes", (request, response) => {
  response.status(200).send("Hello World!");
});

app.post("/api/notes", (request, response) => {
  response.status(200).json({
    message: "Post created",
  });
});

// localhost:5001/api/notes/(Any[int])
app.put("/api/notes/:id", (request, response) => {
  response.status(200).json({
    message: "Note updated",
  });
});

// localhost:5001/api/notes/(Any[int])
app.delete("/api/notes/:id", (request, response) => {
  response.status(200).json({
    message: "Note deleted",
  });
});

app.listen(5001, () => {
  console.log("Open:5001");
});
