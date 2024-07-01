// console.log("hello ");


// function add(a,b,c){
//     let sum=a+b+c;
//     return sum;
// }

// let ans=add(2,4,5);
// console.log(ans);



// let add=34;
// let add=function(a,b,c){
//     let sum=a+b+c;
//     return sum;
// }

// let ans=add(1,2,3,);
// console.log(add);
// console.log(ans);


// arrow function
// let add=(a,b,c)=>{
//     let sum=a+b+c;
//     return sum;
// }


// let ans=add(6,6,7);
// console.log(ans);


// let finalyear=()=>{
//     console.log("hello g3");
// }

// function chitkara(g3){
//     console.log("hello chitkara");
//     console.log(g3);
//     g3();
// }
// chitkara(finalyear);



function chitkara(a){
    console.log(a);
    let ans=()=>{
        console.log("hello innerfunction");
    }
    return ans;
}
let output=chitkara(3);
// output=()=>{
//     console.log("hello innerfunction");
// }
console.log(output);
output();