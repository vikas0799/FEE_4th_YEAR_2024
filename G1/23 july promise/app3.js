// let p1=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("task 1");
//         resolve("promise 1")
//     }, 1000);
// })

// let p2=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("task 2");
//         resolve("promise 2")
//     }, 2000);
// })
// let p3=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("task 3");
//         resolve("promise 3")
//         // reject("promise 3")
//     }, 3000);
// })

// Promise.race([p1,p2,p3]).then((data)=>{
//     console.log(data);
//     console.log(typeof(data));
// })
// .catch((err)=>{
//     console.log(err);
// })


// p2.then((data)=>{
//     console.log(data);
// });

// Promise.all([p1,p2,p3]).then((data)=>{
//     console.log(data);
//     console.log(typeof(data));
// })
// .catch((err)=>{
//     console.log(err);
// })

let x1=new Promise((resolve, reject) => {
    resolve(3);
})
let x2=new Promise((resolve, reject) => {
    resolve(4);
})

Promise.race([x2,x1]).then((data)=>{
    console.log(data);
})