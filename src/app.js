import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("NodeJs and MongoDB & Express")
});

export default app;