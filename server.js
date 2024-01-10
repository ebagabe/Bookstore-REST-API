import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Using the HTTP library for request");
});

server.listen(PORT, () => {
    console.log("Server on!");
})