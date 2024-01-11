import author from '../models/Author.js';

class AuthorController {
    static async ListAuthors(req, res) {
        try {
            const listAuthors = await author.find({});
            res.status(200).json(listAuthors)
        } catch (error) {
            res.status(500).json({ message: `${error.message} - Request failed` });
        }
    }

    static async AuthorById(req, res) {
        try {
            const { id } = req.params;
            const authorFound = await author.findById(id);
            res.status(200).json(authorFound);

        } catch (error) {
            res.status(500).json({ message: `${error.message} - Request failed` });
        }
    }

    static async RegisterAuthor(req, res) {
        try {
            const newAuthor = await author.create(req.body)
            res.status(201).json({ message: "Author successfully registered.", author: newAuthor });

        } catch (error) {
            res.status(500).json({ message: `${error.message} - Failed to register a author.` });
        }
    }

    static async UpdateAuthor(req, res) {
        try {
            const { id } = req.params;
            await author.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Author updated" });

        } catch (error) {
            res.status(500).json({ message: `${error.message} - Update failed` });
        }
    }

    static async DeleteAuthor(req, res) {
        try {
            const { id } = req.params;
            await author.findByIdAndDelete(id);

            res.status(204).json({ message: "Author deleted" });
        } catch (error) {
            res.status(500).json({ message: "Failed to delete" });
        }

    }
};

export default AuthorController;