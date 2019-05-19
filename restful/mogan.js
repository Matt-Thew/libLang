const express = require('express');
const app = express();
const logger = require('morgan');

app.use(logger("dev"));

app.get('/',(req,res)=>{
    console.log("hello route");
    res.json({hello:"sdf"})
});

app.listen(3002, () => console.log('Quote API listening on port 3000!'));