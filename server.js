import http from "http";

const PORT = 3000;

const routes = {
    "/": "Using the HTTP and Express library for request",
    "/books": "I Joined the book route",
    "/authors": "List of authors"
};

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(routes[req.url]);
});

server.listen(PORT, () => {
    console.log("Server on!");
})