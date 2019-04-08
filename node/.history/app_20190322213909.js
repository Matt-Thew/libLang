const express = require('express');
const http = require('http');

const app = express();
const PORT = "3000";
http.createServer(app).listen(3000, () => {
     console.log("server status : running");
     console.log(`run on port : ${PORT}`);
});
app.use("*", (req, res) => {
     console.log("enter route");
     let text = "hello";
     module.exports = {text};
})