function doHomework(subject, callback) {
  callback();
  //alertFinished();
}
function alertFinished(){
      for (let index = 0; index < 10; index++) {
        console.log("in alert"+index);
        
      }
}
doHomework('math', alertFinished);


