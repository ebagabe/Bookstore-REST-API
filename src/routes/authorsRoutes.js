import express from "express";
import BookController from "../controllers/bookController.js";
import AuthorController from "../controllers/authorController.js";

const routes = express.Router();

routes.get("/books", BookController.ListBooks);
routes.get("/books/:id", BookController.BookById);
routes.post("/books", BookController.RegisterBook);
routes.put("/books/:id", BookController.updateBook);
routes.delete("/books/:id", BookController.deleteBook);

export default routes;