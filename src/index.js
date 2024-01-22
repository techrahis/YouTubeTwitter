import dotenv from "dotenv";
import connectMDB from "./db/MongoConnect.js";

dotenv.config({
  path: "./env",
});

connectMDB();
