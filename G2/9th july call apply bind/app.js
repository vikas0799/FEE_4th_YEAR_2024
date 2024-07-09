// let window={
//     ...
// }

let student={
    college:"chitkara university",
    department:"cse me che",
    welcome:function(){
        console.log("welcome to chitkara");
    }
};
// console.log(student);
let krity={
    name:"krity panday",
    age:21,
    college:"punjab university"
    
}
// console.log(krity);

krity.__proto__=student;
// console.log(krity);
console.log(krity.college);
