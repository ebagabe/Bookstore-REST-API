import { authors } from "../models/Author.js";

class AuthorController {
  static ListAuthors = async (req, res) => {

    try {
      const listAuthors = await authors.find();
      res.status(200).json(listAuthors);
    } catch (error) {
      res.status(500).json(error.message);
    }

  };

  static AuthorById = async (req, res) => {
    try {
      const { id } = req.params;
      const authorFound = await authors.findById(id);
      res.status(200).json(authorFound);

    } catch (error) {
      res.status(500).json({ message: `${error.message} - Request failed` });
    }
  };

  static RegisterAuthor = async (req, res) => {
    try {
      const newAuthor = await authors.create(req.body);
      res.status(201).json({ message: "Author successfully registered.", author: newAuthor });

    } catch (error) {
      res.status(500).json({ message: `${error.message} - Failed to register a author.` });
    }
  };

  static UpdateAuthor = async (req, res) =>  {
    try {
      const { id } = req.params;
      await authors.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Author updated" });

    } catch (error) {
      res.status(500).json({ message: `${error.message} - Update failed` });
    }
  };

  static DeleteAuthor = async (req, res) =>  {
    try {
      const { id } = req.params;
      await authors.findByIdAndDelete(id);

      res.status(204).json({ message: "Author deleted" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete" });
    }

  };
}

export default AuthorController;