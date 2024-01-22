import dotenv from "dotenv";
import connectMDB from "./db/MongoConnect.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectMDB()
  .then(() => {
    app.listen(process.env.PORT || 5600, () => {
      console.log(
        `Mongo Connected and Server is listening on port ${process.env.PORT}`
      );
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
