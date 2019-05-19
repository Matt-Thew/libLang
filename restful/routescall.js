const express = require('express');
const app = express();
const jsonParser = require('body-parser');
var route = require('./routes');


app.use('/api',route);
app.use(jsonParser());


app.use((req,res,next)=>{
    console.log(req.body);
    console.log("middle one");
    next();
})

app.get('/api', (req, res)=>{
    console.log("final");
    res.json({greeting: "Hello World!"});
});


app.use((req,res,next)=>{
    console.log("middle two");
    next();
    console.log("heloo");
})




app.listen(3002, () => console.log('Quote API listening on port 3000!'));
