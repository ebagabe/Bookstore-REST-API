import book from '../models/Book.js';

class BookController {
    static async ListBooks(req, res) {
        try {
            const listBooks = await book.find({});
            res.status(200).json(listBooks)
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
        try {
            const newBook = await book.create(req.body)
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
};

export default BookController;