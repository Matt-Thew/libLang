function doHomework(subject, callback) {
  callback();
  //alertFinished();
}
function alertFinished(){
    setTimeout(() => {
      for (let index = 0; index < 10; index++) {
        console.log(index);
        
      }
    }, 5000)
}
doHomework('math', alertFinished);

setTimeout(() => {
  
}, timeout);

