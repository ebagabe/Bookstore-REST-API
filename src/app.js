import express from "express";
import databaseConnect from "./config/dbConnect.js";
import routes from "./routes/index.js";
import mongoose from "mongoose";

const connection = await databaseConnect();


connection.on("error", (error) => {
  console.error("Error connection: ", error);
});

connection.once("open", () => {
  console.log("Success conection!");
});

const app = express();
routes(app);

app.use((error, req, res, next) => {
  if (error instanceof mongoose.Error.CastError) {
    return res.status(400).send({ message: "Bad Request" });
  }
  res.status(500).send({ message: "Internal Server Error" });
})

export default app;

