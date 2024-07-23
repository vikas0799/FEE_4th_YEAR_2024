let p1=new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("async task 1");
        resolve(100);
    }, 1000);
})

let p2=new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("async task 2");
        resolve(200);
    }, 2000);
})

let p3=new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("async task 3");
        // resolve(300);
        reject("netowrk error")
    }, 3000);
})

Promise.race([p1,p2,p3])
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})


// Promise.all([p1,p2,p3])
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error);
// })