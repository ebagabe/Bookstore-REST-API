import books from "../models/Book.js";

class BookController {

  static listBooks = async (req, res, next) => {
    try {
      const booksResult = await books.find()
        .populate("author")
        .exec();

      res.status(200).json(booksResult);
    } catch (error) {
      next(error)
    }
  };

  static bookById = async (req, res, next) => {
    try {
      const id = req.params.id;

      const bookResult = await books.findById(id)
        .populate("author", "name")
        .exec();

      res.status(200).send(bookResult);
    } catch (error) {
      next(error);
    }
  };

  static registerBook = async (req, res, next) => {
    try {
      let book = new books(req.body);

      const bookResults = await book.save();

      res.status(201).send(bookResults.toJSON());
    } catch (error) {
      next(error);
    }
  };

  static updateBook = async (req, res, next) => {
    try {
      const id = req.params.id;

      await books.findByIdAndUpdate(id, { $set: req.body });

      res.status(200).send({ message: "Book updated" });
    } catch (error) {
      next(error)
    }
  };

  static deleteBook = async (req, res, next) => {
    try {
      const id = req.params.id;

      await books.findByIdAndDelete(id);

      res.status(200).send({ message: "Book deleted" });
    } catch (error) {
      next(error);
    }
  };

  static bookByPublisher = async (req, res, next) => {
    try {
      const publisher = req.query.publisher;

      const bookResult = await books.find({ "publisher": publisher });

      res.status(200).send(bookResult);
    } catch (error) {
      next(error);
    }
  };

}

export default BookController;