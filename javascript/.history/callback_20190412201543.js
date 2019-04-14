<script>
function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
  //alertFinished();
  alert("afer");
}
function alertFinished(){
    setTimeout(() => {
    
    }, 5000);
}
doHomework('math', alertFinished);

setTimeout(() => {
  
}, timeout);
</script>

