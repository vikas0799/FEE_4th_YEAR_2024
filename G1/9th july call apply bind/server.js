// let window={

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
    college:"hariyana university"
}


let khushi={
    name:"khushi aggarwal",
    age:22
}

// console.log(krity);
krity.__proto__=student;
console.log(krity.college);
// console.log(krity);
// khushi.__proto__=student;
// krity.welcome();
// console.log(krity.college);
console.log(krity.age);
// console.log(krity);

// console.log(krity);
