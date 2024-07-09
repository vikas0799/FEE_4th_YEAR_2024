// let window={

// }

let student={
    college:"chitkara university",
    department:"cse me che",
    welcome:function(){
        console.log("welcome to chitkara");
    }
};


let krity={
    name:"krity panday",
    age:21,
    college:"punjab university"
}


let khushi={
    name:"khushi aggarwal",
    age:22
}

krity.__proto__=student;
// khushi.__proto__=student;
// krity.welcome();
// console.log(krity.college);
// console.log(krity.age);
// console.log(krity);

console.log(krity);
