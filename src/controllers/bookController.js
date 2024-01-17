import books from "../models/Book.js";

class BookController {

  static listBooks = async (req, res) => {
    try {
      const booksResult = await books.find()
        .populate("author")
        .exec();

      res.status(200).json(booksResult);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  static bookById = async (req, res) => {
    try {
      const id = req.params.id;

      const bookResult = await books.findById(id)
        .populate("author", "name")
        .exec();

      res.status(200).send(bookResult);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };

  static registerBook = async (req, res) => {
    try {
      let book = new books(req.body);

      const bookResults = await book.save();

      res.status(201).send(bookResults.toJSON());
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

  static updateBook = async (req, res) => {
    try {
      const id = req.params.id;

      await books.findByIdAndUpdate(id, { $set: req.body });

      res.status(200).send({ message: "Book updated" });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

  static deleteBook = async (req, res) => {
    try {
      const id = req.params.id;

      await books.findByIdAndDelete(id);

      res.status(200).send({ message: "Book deleted" });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

  static bookByPublisher = async (req, res) => {
    try {
      const publisher = req.query.publisher;

      const bookResult = await books.find({ "publisher": publisher });

      res.status(200).send(bookResult);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

}

export default BookController;