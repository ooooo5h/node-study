// node로 서버 구동시키기
// const http = require("http");

// http.createServer(function (req, res) {
//     const url = req.url;

//     if (url === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('Hello Node');
//     } else if (url ==='/hi') {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('HI');
//     }
// }).listen(8080, function () {
//     console.log("8080 server start");
// });

// express로 서버 구동시키기
const express = require("express");
const app = express();

app.get('/', function (req, res) {
    res.set("Content-Type", "text/pplain")
    res.status(200).send("hello express");
})

app.listen(8080, function () {
    console.log("8080 server start");
})