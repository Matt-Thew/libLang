const express = require('express');
const router = express.Router();

router.get('/stock',(req,res)=>{
    console.log("hello route");
});


module.exports = router;