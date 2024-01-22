import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectMdb = async () => {
  try {
    await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}?retryWrites=true&w=majority`
    );
  } catch (error) {
    console.log(error);
    process.exit(1); // Stop the app if there is an error
  }
};

export default connectMdb;
