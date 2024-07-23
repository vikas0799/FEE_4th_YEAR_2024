// function getUserName() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve('John Doe');
//       }, 1000);
//     });
//   }
  
//   function getUserAge(name) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(`${name} is 30 years old`);
//       }, 1500);
//     });
//   }
  
//   function getUserAddress(age) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(`${age} and lives at 123 Main St`);
//       }, 2000);
//     });
//   }
  
//   getUserName()
//     .then(name => getUserAge(name))
//     .then(age => getUserAddress(age))
//     .then(result => console.log(result))
//     .catch(error => console.error(error));
  