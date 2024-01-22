import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectMDB = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}?retryWrites=true&w=majority`
    );
    console.log("Database is connected to:", connection.connections[0].name);
  } catch (error) {
    console.log(error);
    process.exit(1); // Stop the app if there is an error
  }
};

export default connectMDB;
