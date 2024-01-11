import express from "express";

const app = express();
app.use(express.json());

const books = [
    {
        id: 1,
        title: 'The Lord of the Rings'
    },
    {
        id: 2,
        title: 'The Hobbit'
    }
];

function searchBook(id) {
    const filterBook = books.find((book) => book.id === parseInt(id));
    return filterBook
}

app.get("/", (req, res) => {
    res.status(200).send("NodeJs and MongoDB & Express")
});

app.get('/books', (req, res) => {
    res.status(200).json(books)
})

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

// mongodb+srv://admin:<password>@cluster0.g4ggftp.mongodb.net/?retryWrites=true&w=majority