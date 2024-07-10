// console.log("line 1");
// console.log("line 2");

// setTimeout(() => {
//     console.log("line 3");
//     clearInterval(cleartimeID);
// }, 7000);

// let cleartimeID=setInterval(() => {
//     console.log("line 5");
// }, 2000);



// setTimeout(() => {
//     console.log("line 3.2");
// clearTimeout(timeoutID);
// }, 3000);








// console.log(timeoutID);
// setInterval(() => {
//     console.log("line 3");
// }, 3000);


// console.log("line 4");




console.log("line 1");

queueMicrotask(()=>{
    console.log("line 2");
})

queueMicrotask(()=>{
    console.log("line 2.1");
})

setTimeout(() => {
    console.log("line 3");
}, 0);

console.log("line 4");

setTimeout(() => {
    console.log("line 5");
}, 0);