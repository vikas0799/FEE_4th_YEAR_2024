// // "use strict"
// // console.log(window);
// // console.log(this);

// // function display(){
// //     console.log(this);
// // }
// // display();

// let obj = {
//   name: "vikas patel",
//   age: 26,
//   district: "lucknow",
//   display: function () {
//     let x = () => {
//       console.log(this);
//     };
//     x();
//   }
// };
// obj.display();

// // let ans=obj.display;
// // ans();




// function display(){
//     let cnt=0;
//     function counter(){
//         cnt++;
//         console.log(cnt);
//         function xyz(){
//             cnt++;
//         }
//         xyz();
//     }
//     counter();
//     console.log(cnt);
// }
// display();





let x="212.456";
//  x=parseInt(x);
//  console.log(typeof(x));
x=parseFloat(x);
console.log(typeof(x));
console.log(x);



// const json = '{"result":true, "count":42}';
// const obj = JSON.parse(json);

// console.log(obj.count);
// // Expected output: 42

// console.log(obj.result);
// // Expected output: true

// const obj = {name: "John", age: 30, city: "New York"};
// const myJSON = JSON.stringify(obj);
// // console.log(typeof(myJSON));
// console.log(myJSON);
