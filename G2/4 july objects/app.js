// "use strict"
// let kartik={
//     name:"kartik sharma",
//     age:24,
//     district:"chandigarh",
//     address:{
//         state:"punjab",
//         dist:"rajpura",
//         country:"india"
//     }
// };
// // console.log(kartik.address.country);
// console.log(kartik["name"]);
// console.log(typeof(kartik));


// let arr=[23,1,4,3,5];
// console.log(typeof(arr));


// let kartik={
//     name:"kartik",
//     age:20,
//     display:()=>{
//         console.log("hello g2");
//     }
// };
// console.log(kartik.display);
// kartik.display();



// console.log("hello");
// console.log(window);
// console.log(this);


// function display(){
//     console.log(this);
// }
// display();

let obj={
    name:"ashish",
    age:23,
    dist:"bhivani",
    // display:function(){
    //     // console.log(obj.age);
    //     console.log(this);
    // }
    display:()=>{
        console.log(this);
    }
}
obj.display();


// let ans=obj.display;
// ans();

