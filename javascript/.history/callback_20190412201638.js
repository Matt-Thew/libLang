<script>
function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
  //alertFinished();
  alert("afer");
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
</script>

