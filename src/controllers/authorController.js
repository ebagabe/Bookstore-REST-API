import NotFound from "../errors/NotFound.js";
import { authors } from "../models/Author.js";

class AuthorController {
  static listAuthors = async (req, res, next) => {

    try {
      const listAuthors = await authors.find();
      res.status(200).json(listAuthors);
    } catch (error) {
      next(error);
    }

  };

  static authorById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const authorFound = await authors.findById(id);

      if (authorFound !== null) {
        return res.status(200).json(authorFound);
      }

      next(new NotFound("ID Don't Found"))
    } catch (error) {
      next(error)
    }
  };

  static registerAuthor = async (req, res, next) => {
    try {
      let author = new authors(req.body);
      const authorResult = await author.save();

      res.status(201).send(authorResult.toJSON());

    } catch (error) {
      next(error);
    }
  };

  static updateAuthor = async (req, res, next) => {
    try {
      const id = req.params.id;

      await authors.findByIdAndUpdate(id, { $set: req.body });

      res.status(200).send({ message: "Update Successful" });
    } catch (error) {
      next(error);
    }
  };

  static deleteAuthor = async (req, res, next) => {
    try {
      const id = req.params.id;

      await authors.findByIdAndDelete(id);

      res.status(200).send({ message: "Delete Successful" });
    } catch (error) {
      next(error);
    }
  };

  static listAuthorById = async (req, res, next) => {
    try {
      const id = req.params.id;

      const author = await authors.findById(id);

      res.status(200).send(author);
    } catch (error) {
      next(error);
    }
  };
}

export default AuthorController;