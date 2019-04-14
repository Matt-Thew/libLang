<script>
function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
  //alertFinished();
  alert("afer");
}
function alertFinished(){
      for (let index = 0; index < 10; index++) {
        console.log(index);
        
      }
}
doHomework('math', alertFinished);

setTimeout(() => {
  
}, timeout);
</script>

