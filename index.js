const http = require("http");

http.createServer(function (req, res) {
    const url = req.url;

    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello Node');
    } else if (url ==='/hi') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('HI');
    }
}).listen(8080, function () {
    console.log("8080 server start");
});