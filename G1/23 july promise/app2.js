let y=new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve(8);
        reject("network problem")
      }, 3000);
});
// console.log(y);
// console.log(typeof(y));

y.then((data)=>{
    console.log(data*data);
})
.catch((err)=>{
    console.log(err);
})