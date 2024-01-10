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
    const filterBook = books.filter((book) => book.id === parseInt(id));
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
    res.status(200).json(searchBook(id))
})

app.post('/books', (req, res) => {
    books.push(req.body)
    res.status(201).send("Book successfully registered")
})

app.put('/books/:id', (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    const book = searchBook(id)

    book[0].title = title

    return res.status(200).json({ message: "Updated!" })
});





export default app;