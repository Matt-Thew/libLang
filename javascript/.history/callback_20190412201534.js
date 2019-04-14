<script>
function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
  //alertFinished();
  alert("afer");
}
function alertFinished(){
    alert('call alertFinished');
    setTimeout(() => {
      alert('Finished my homework');
    }, 5000);
}
doHomework('math', alertFinished);

setTimeout(() => {
  
}, timeout);
</script>

