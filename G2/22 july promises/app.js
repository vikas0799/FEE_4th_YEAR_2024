// let x={
//     name:"chitkara",
//     age:20,
//     name2:"chitkara"
// };

// let y={
//     name2:"chitkara",
//     age:20
// };

// if(x.name==x.name2){
//     console.log("hiii");
// }
// else{
//     console.log("bye");
// }


// let arr=[23,45,678,"university",true,null,undefined,244];

// //   let brr= [...arr,2345,1000,"punjab"," ",""];

// let brr=[...arr];
// if(arr==brr){
//     console.log("hiii");
// }
// else{
//     console.log("bye");
// }



// Create an Object

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
  
// //   let firstName=person.firstName;
// //   let age=person.age;

//   // Destructuring Assignment
//   let { firstName, age } = person;


//   console.log(firstName);
//   console.log(age);



// // es6 rest parameter
function fun(...input) {
    let sum = 0;
    for (let i of input) {
        sum += i;
    }
    return sum;
}
console.log(fun(1, 2)); //3
console.log(fun(1, 2, 3)); //6
console.log(fun(1, 2, 3, 4, 5)); //15                 

