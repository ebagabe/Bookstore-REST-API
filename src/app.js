import express from "express";
import databaseConnect from "./config/dbConnect.js";
import routes from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";
import handler404 from "./middlewares/handler404.js";

const connection = await databaseConnect();


connection.on("error", (error) => {
  console.error("Error connection: ", error);
});

connection.once("open", () => {
  console.log("Success conection!");
});

const app = express();
routes(app);

app.use(handler404);

app.use(errorHandler);

export default app;

