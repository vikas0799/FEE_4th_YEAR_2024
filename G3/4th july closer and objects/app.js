
// "use strict"
// console.log(window);
// console.log(this);


// function abc(){
//     console.log(this);
// }

// abc();
// window.abc();



// let a=90;
// console.log(window.a);

// console.log(this);

// let obj={
//     name:"vikas patel",
//     age:26,
//     // display:function(){
//     //     // console.log(obj.age);
//     //     // console.log(obj.name);
//     //     console.log(this.age);
//     // }
//     print:()=>{
//         console.log(obj.age);
//         console.log(this);
//     }
// }
// obj.print();

// obj.display();


// let ans=obj.display;
// console.log(ans);
// ans();





// function display(){
//     let cnt=0;
//      function counter(){
//         cnt++;
//         console.log(cnt);
//      }
//      counter();
//      counter();
//      console.log(cnt);
// }
// display();

// let x="1111.456";
// // x=parseInt(x);
// x=parseFloat(x);
// console.log(typeof(x));
// console.log(x);



// const json = '{"result":true, "count":42}';
// const obj = JSON.parse(json);

// console.log(obj.count);
// // Expected output: 42

// console.log(obj.result);
// // Expected output: true

const obj = {name: "John", age: 30, city: "New York"};
const myJSON = JSON.stringify(obj);
console.log(typeof(myJSON));
