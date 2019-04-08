var waitTime = 3000;
var currentTime = 0;
var waitInterval = 500;

console.log("wait for it");

setInterval(() => {
    currentTime += waitInterval;
    console.log(`wait for it ${currentTime/1000} second`);
    
}, waitInterval);

setTimeout(() => {
    console.log('done');
    
}, waitTime);