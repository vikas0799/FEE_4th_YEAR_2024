// // fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
// fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
// .then((reponce)=>{return reponce.json() })
// .then((result)=>{
//     console.log(result);
//     document.getElementsByTagName("h1")[1].innerHTML=result.bpi.USD.rate;
// })
// .catch((err)=>{
//     console.log("network problem");
//     console.log(err);
// })



// // es6 rest parameter
// function fun(...input) {
//     let sum = 0;
//     for (let i of input) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(fun(1, 2)); //3
// console.log(fun(1, 2, 3)); //6
// console.log(fun(1, 2, 3, 4, 5)); //15                 



// Create an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
//   let firstName=person.firstName;
//   let age=person.age;
  // Destructuring Assignment
  let { firstName, age } = person;

  console.log(firstName);
  console.log(age);