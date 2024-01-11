import express from "express";
import AuthorController from "../controllers/authorController.js";

const routes = express.Router();

routes.get("/authors", AuthorController.ListAuthors);
routes.get("/authors/:id", AuthorController.AuthorById);
routes.post("/authors", AuthorController.RegisterAuthor);
routes.put("/authors/:id", AuthorController.UpdateAuthor);
routes.delete("/authors/:id", AuthorController.DeleteAuthor);

export default routes;