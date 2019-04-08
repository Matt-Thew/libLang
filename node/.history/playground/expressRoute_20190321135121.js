const express = require('express');

console.log("hello express");

var app = express();

app.get('/', function(req, res){
    res.send('hello world nnode'); 
});

app.listen(3000);