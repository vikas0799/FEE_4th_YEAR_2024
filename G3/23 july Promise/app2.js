
let x= new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("task 1 completed");
        // resolve("accound detailes");
        reject("network error")
    }, 3000);
})

x.then((data)=>{
    console.log("waiting for responce of resolve return ");
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})


