import express from "express";
import noteR from "../modules/note/note.routes.js";
import connectDB from "../config/db.js";
import dotenv from "dotenv";
import morgan from "morgan";
import rateLimiter from "../shared/middleware/rateLimiter.js";
import { env } from "../config/env.js";

// Init
const $ = express();
const PORT = env.PORT || 5001;

// DB Connect
connectDB();

// Middleware section
$.use(express.json()); // Content-Type: application/json
$.use(rateLimiter); // Rate Limiter
$.use(morgan(":method :url :status :res[content-length] - :response-time ms")); // HTTP Logger

// Routes section
$.use("/api/note", noteR);

// Listening section
$.listen(PORT, () => {
  console.log(`Open:${PORT}`);
});
