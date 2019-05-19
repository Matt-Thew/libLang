const express = require('express');
const app = express();


app.use((req,res,next)=>{
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
