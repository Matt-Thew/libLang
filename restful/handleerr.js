const express = require('express');
const app = express();
const logger = require('morgan');

app.use(logger("dev"));

app.get('/',(req,res)=>{
    console.log("hello route");
    res.json({hello:"sdf"})
});

app.use((req,res,next)=>{
    var err = new Error("not found");
    err.status = 404;
    next();
});

app.use((err,res,next) => {
    res.status(err.status || 500);
    res.json({message:"Page not"})
});

app.listen(3002, () => console.log('Quote API listening on port 3000!'));