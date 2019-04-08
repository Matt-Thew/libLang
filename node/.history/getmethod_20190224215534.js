
const https = require('https');
const testGet = https.get('https://postman-echo.com/get?test=123',response=>{
    console.log(testGet.responseCode);
});

