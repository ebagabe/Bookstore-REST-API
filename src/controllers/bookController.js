import { author } from "../models/Author.js";
import book from "../models/Book.js";

class BookController {
  static async ListBooks(req, res) {
    try {
      const listBooks = await book.find({});
      res.status(200).json(listBooks);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Request failed` });
    }
  }

  static async BookById(req, res) {
    try {
      const { id } = req.params;
      const bookFound = await book.findById(id);
      res.status(200).json(bookFound);

    } catch (error) {
      res.status(500).json({ message: `${error.message} - Request failed` });
    }
  }

  static async RegisterBook(req, res) {
    const newBook = req.body;

    try {
      const authorFound = await author.findById(newBook.author);
      const completeBook = { ...newBook, author: { ...authorFound._doc } };
      const bookCreated = await book.create(completeBook);
      res.status(201).json({ message: "Book successfully registered.", book: newBook });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Failed to register book.` });
    }
  }

  static async updateBook(req, res) {
    try {
      const { id } = req.params;
      await book.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Book updated" });

    } catch (error) {
      res.status(500).json({ message: `${error.message} - Update failed` });
    }
  }

  static async deleteBook(req, res) {
    try {
      const { id } = req.params;
      await book.findByIdAndDelete(id);

      res.status(204).json({ message: "Book deleted" });
    } catch (error) {
      res.status(500).json({ message: "Failed to delete" });
    }

  }

  static async ListBooksByPublisher(req, res) {
    const publisher = req.query.publisher;

    try {
      const booksByPublisher = await book.find({ publisher });
      res.status(200).json(booksByPublisher);
    } catch (error) {
      res.status(500).json({ message: "Failed to find" });
    }
  }
}

export default BookController;