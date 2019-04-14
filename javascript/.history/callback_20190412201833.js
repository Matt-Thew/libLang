function doHomework(subject, callback) {
  callback();
  //alertFinished();
}
function alertFinished(){
      for (let index = 0; index < 10; index++) {
        console.log(index);
        
      }
}
doHomework('math', alertFinished);

setTimeout(() => {
  
}, timeout);

