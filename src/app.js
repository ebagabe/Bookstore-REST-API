import express from "express";
import databaseConnect from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connection = await databaseConnect();

connection.on("error", (error) => {
    console.error("Error connection: ", error)
})

connection.once("open", () => {
    console.log("Success conection!");
})

const app = express();
routes(app);

app.get('/books/:id', (req, res) => {
    const { id } = req.params;

    const book = searchBook(id);
    res.status(200).json(book);
})

app.post('/books', (req, res) => {
    books.push(req.body)
    res.status(201).send("Book successfully registered")
})

app.put('/books/:id', (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    const book = searchBook(id)
    book.title = title

    return res.status(200).json()
});

app.delete('/books/:id', (req, res) => {
    const { id } = req.params

    const bookIndex = books.findIndex(book => book.id === parseInt(id));

    if (bookIndex === -1) {
        return res.status(404).json({ error: 'Not Found' })
    }

    books.splice(bookIndex, 1)
    return res.status(204).send()
})

export default app;

