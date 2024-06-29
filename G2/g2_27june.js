// console.log(k);
// let k=89;
// console.log(k);


// function add(a,b,c){
//     let sum=a+b+c;
//     return sum;
// }

// let ans=add(2,4,6);
// console.log(ans);


// anonymus function syntax
// let add=778;
// let add=function (a,b,c){
//     let sum=a+b+c;
//     return sum;
// }
// let ans=add(1,3,5);
// console.log(ans);



// arrow function syntax
// let add=(a,b,c)=>{
//     let sum=a+b+c;
//     return sum;
// }
// let ans=add(3,2,1);
// console.log(ans);


// function add(a,b){
//     let x=a+b;
//     console.log(x);
//     // function vikas(){
//     //     console.log("inside vikas function");
//     // }
//     let vikas=function(){
//         console.log("inside vikas function");
//     }
//     return vikas;
// }

function g2(){
    console.log("inside g2 function");
}

function cse(xyz){
    xyz();
    console.log(xyz);
    console.log("inside cse ");
}

cse(g2);