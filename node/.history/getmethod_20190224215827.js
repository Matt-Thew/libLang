
const https = require('https');
const testGet = https.get('https://postman-echo.com/get?test=123',response=>{


    //Get body element
    response.on('data',data=>{
        console.log('data',data.toString())
    })
});

