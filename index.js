const express = require("express");
const app = express();
const main = require("./routes/main")

app.use('/main', main);

app.listen(8082, function() {
    console.log("8082 server start");
})