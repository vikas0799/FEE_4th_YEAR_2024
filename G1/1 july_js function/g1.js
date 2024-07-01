// console.log("hello g1");


// function add(a,b,c){
//     let sum=a+b+c;
//     return sum;
// }

// let ans=add(1,2,3);
// console.log(ans);



// let x=89;
// x="vikas patel";

// let xyz=function (a,b,c){
//     let sum=a+b+c;
//     return sum;
// }

// let xyz=(a,b,c)=>{
// let sum=a+b+c;
// console.log("hello g1");
// return sum;
// }


// let out=xyz(1,1,1);
// console.log(out);
// console.log(xyz);


// let g1=()=>{
//     console.log("h1llo g1");
//     console.log("h1llo g2");
//     console.log("h1llo g3");

// }
// // console.log(g1);
// // g1(2,4);

// function chitkara(finalyear){
//     console.log("i am in 4th year");
//     console.log(finalyear);
//     finalyear();
// }

// chitkara(g1);


function chitkara(x){
    console.log("i am in 4th year");
    console.log(x*x);
    let ans=()=>{
        console.log("hi i am ans varriable");
    }
    return ans;
}
// console.log(chitkara(2));
let out=chitkara(2);
// console.log(out);
out();