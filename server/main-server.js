const path = require("path");
const fs = require("fs");
const express = require("express");
const App = express();
const port = 3000;
console.log("Running Main Server");

const clientDirectory = path.resolve(__dirname, "../client");
const htmlIndex = path.resolve(__dirname, "../client/html/index.html");
console.log(clientDirectory);

const logRequest = (req, res, next) => {
    console.log(req);
    console.log("\r\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\r\n");
    next();
}

const helloWorld = (function () {
    return (`
        <div>
            <h1 style="color: green">Hello World</h1>
        </div>
    `);
})();

App.use(express.static("../client"));
App.get("/", function (req, res, next) {
    res.sendFile(htmlIndex);
});

// App.use(logRequest);

// App.get("/", function (req, res, next) {
//     res.send();
// });
App.get("/hello", function (req, res, next) {
    res.send(helloWorld);
});

App.listen(port);