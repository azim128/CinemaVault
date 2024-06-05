import mongoose from "mongoose";
import { connectionString } from "./secret_config.js";

const connectDB = async () => {
  try {
    console.log(connectionString)
    await mongoose.connect(connectionString);

    console.log("MongoDB is connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
