let p1=new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise 1");
        resolve("task 1 complted")
    }, 1000);
})

let p2=new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise 2");
        resolve("task 2 complted")
    }, 2000);
})


let p3=new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise 3");
        resolve("task 3 complted")
    }, 3000);
})


// Promise.all([p1,p2,p3]).then((data)=>{
//     console.log("hello");
//     console.log(data);
// })


Promise.race([p1,p2,p3]).then((data)=>{
    console.log("hello hii");
    console.log(data);
})