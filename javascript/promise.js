const breakFastPromise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        var order = false;
        if(order){
            resolve('success');
        }else{
            reject('fail to create');
        }
    },3000);
});

console.log(breakFastPromise);

breakFastPromise.then((val)=>{
    console.log(val);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log('finall');
})