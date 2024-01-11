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

