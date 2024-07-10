// console.log("hello 1");
// console.log("hello 2");



// let timeoutid=setTimeout(() => {
// clearInterval(timeintervalID);
//     console.log("hello 3");
    
// }, 7000);

// let timeintervalID=setInterval(() => {
//     // clearTimeout(timeoutid);
//     console.log("hello 4");
// }, 3000);




// // setTimeout(() => {
// //     console.log("hello 4");
// // clearTimeout(timeoutid);
// // }, 3000);





// // setInterval(() => {
// //     console.log("settime interval");
// // }, 3000);

// // console.log("hello 4");






// setTimeout(() => {
//     console.log("hello 3");
// }, 1500);

// console.log("hello 1");
// console.log("hello 2");

// setTimeout(() => {
//     console.log("hello 3");
//     queueMicrotask(()=>{
//         console.log("hello 5");
//     })
// },0);

queueMicrotask(()=>{
    console.log("hello 4");
})

queueMicrotask(()=>{
    console.log("hello 5");
})

setTimeout(() => {
    console.log("hello 6");
},0);
setTimeout(() => {
    console.log("hello 7");
},0);