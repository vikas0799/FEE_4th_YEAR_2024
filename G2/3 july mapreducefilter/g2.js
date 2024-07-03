// let arr = [1, 5, 3, 2, 5];
// let chitkara = arr.map((element, idx, arr) => {
//   console.log(element,idx,arr);
//   if (idx >= 2) {
//     return element * element;
//   } else {
//     return element;
//   }
// });

// console.log(chitkara);








// // let x=8;
// // console.log(x);
// // x="vikas";
// // console.log(x);




// let arr=[2,4,3,1,6,21];

//   let ans=arr.filter((element,idx,arr)=>{
//     // console.log(element,idx,arr);
//     if(element%3==0){
//         return true;
//     }
//     else{
//         return false;
//     }
//   })
//   console.log(ans);


// let arr=[2,4,3,1,6,21];
//   let ans=arr.reduce((acc,curr,idx,arr)=>{
//     console.log(acc,curr,idx,arr);
//     acc=acc+curr;
//     return acc;
//   },12);
// console.log(ans);



// let arr=[12,3,4,35,117,9];
//   arr.sort((a,b)=>{
//     return a-b;
//   });
//   console.log(arr);

// let str="chITkara University";
// console.log(str.toUpperCase());


let arr=[23,4,99,4,5];
// let newArray=arr.slice(2,4);
let newArray=arr.splice(2,2,"chitkara",233,false);
console.log(newArray);
console.log(arr);
