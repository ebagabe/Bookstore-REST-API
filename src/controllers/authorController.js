import { authors } from "../models/Author.js";

class AuthorController {
  static listAuthors = async (req, res) => {

    try {
      const listAuthors = await authors.find();
      res.status(200).json(listAuthors);
    } catch (error) {
      res.status(500).json(error.message);
    }

  };

  static authorById = async (req, res) => {
    try {
      const { id } = req.params;
      const authorFound = await authors.findById(id);
      res.status(200).json(authorFound);

    } catch (error) {
      res.status(500).json({ message: `${error.message} - Request failed` });
    }
  };

  static registerAuthor = async (req, res) => {
    try {
      let author = new authors(req.body);
      const authorResult = await author.save();

      res.status(201).send(authorResult.toJSON());

    } catch (error) {
      res.status(500).json({ message: `${error.message} - Failed to register a author.` });
    }
  };

  static updateAuthor = async (req, res) => {
    try {
      const id = req.params.id;

      await authors.findByIdAndUpdate(id, { $set: req.body });

      res.status(200).send({ message: "Update Successful" });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

  static deleteAuthor = async (req, res) => {
    try {
      const id = req.params.id;

      await authors.findByIdAndDelete(id);

      res.status(200).send({ message: "Delete Successful" });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

  static listAuthorById = async (req, res) => {
    try {
      const id = req.params.id;

      const author = await authors.findById(id);

      res.status(200).send(author);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };
}

export default AuthorController;