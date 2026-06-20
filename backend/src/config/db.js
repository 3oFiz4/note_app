import mongoose from "mongoose";
import { env } from "../config/env.js";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("[OK] DB");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
