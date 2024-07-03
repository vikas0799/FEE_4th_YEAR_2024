// // console.log("hello");
// let kartik={
//     name:"kartik sharma",
//     age:20,
//     college:"chitkara university",
//     address:"rajpuar punjab"
// };
// let anmol={
//     name:"anmol gupta",
//     age:22,
//     college:"chitkara university",
//     address:"panchkula hariyana"
// };


// // let ans=anmol.address;
// // let ans=anmol["age"];
// // console.log(ans);


// let person={
//     name:"anmol gupta",
//     age:23,
//     address:"panchkula hariyana",
//     display:()=>{
//         console.log("hello g1");
//     },
//     present:false
// };
// let ans=person.display;
// console.log(ans);
// ans();




// let college={
//     name:"chitkara university",
//     establish_year:1999,
//     department:{
//         cse:{
//             location:"rajpura punjab",
//             no_student:8000,
//             campus:200
//         },
//         ME:{
//             location:"rajpura road punjab",
//             no_student:1000,
//             campus:50
//         },
//         CHE:{
//                 location:null,
//                 no_student:0,
//                 campus:0
//         }
//     },
//     chanceller:"Ashok chitkara",
//     address:"rajpuara punjab"
// };


// let ans=college.department.cse.no_student;
// console.log(ans);


// let arr=[23,5,6,34];
// console.log(typeof(arr));




let college={
    name:"chitkara university",
    establish_year:1999,
    department:{
        cse:{
            location:"rajpura punjab",
            no_student:8000,
            campus:200
        },
        ME:{
            location:"rajpura road punjab",
            no_student:1000,
            campus:50
        },
        CHE:{
                location:null,
                no_student:0,
                campus:0
        }
    },
    chanceller:"Ashok chitkara",
    address:"rajpuara punjab"
};

// let xyz=Object.keys(college.department);
// console.log(xyz);

// let ans=Object.values(college.department);
// console.log(ans);




let arr=[2,4,7,4,33];
// let newArray=arr.slice(2,4);
let newArray=arr.splice(2,2,"A","B");
console.log(newArray);
console.log(arr);
