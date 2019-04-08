const express = require('express');

console.log("hello express");

var app = express();

app.get('/', function(req, res){
    res.send('hello world @'); 
});

app.get('/test', function(req, res){
    res.send('hello test @'); 
});
app.listen(3000);