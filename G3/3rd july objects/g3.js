// let x=90;
// let y="vikas patel";

// "use strict"
// let obj={
//     name:"john wick",
//     age:44,
//     address:"moscow",
//     countrty:"russia",
//     chapter5:false,
//     college:undefined,
//     display:()=>{
//         let x=78;
//         console.log("john wick chapter 1");
//         // console.log(this.address);
//     }
// };
// console.log(obj.name);
// let ans=obj.address;

// let ans=obj["display"];
// let ans=obj.display;
// console.log(ans);
// ans();



// let person={
//     name:"john wick",
//     address:{
//         state:"UP",
//         localaddress:{
//             area:"rajpura",
//             hostel:"h2",
//             xyz:{
//                 village:"jhansla",
//                 age:40
//             }
//         }
//     },
//     movie:true
// }

// let ans=person.address.localaddress;
// console.log(ans);



let obj={
    name:"john wick",
    age:44,
    address:"moscow",
    countrty:"russia",
    chapter5:false,
    college:undefined,
    display:function (){
        let x=78;
        console.log("john wick chapter 1");
        console.log(this);
    }
};
obj.display();
// let ans=obj.display;
// ans();
console.log(this);




// let arr=[12,45,"john",true,null,"chitkara"];
// console.log(typeof(arr));


// premitive data type->string Number,boolen,nill,undefiled,nan,
// non premitive data type->function ,object


// if(23=="23"){
//     console.log("hii");
// }
// else{
//     console.log("bye");
// }

// if(23==="23"){
//     console.log("hii");
// }
// else{
//     console.log("bye");
// }

// let x="vikas patel";
// console.log(x*x);


// let college={
//     name:"chitkara",
//     department:"Engineering",
//     address:"rajpura punjab"
// }

// // let arr=Object.keys(person);

// let arr=Object.values(person)
// console.log(arr);




// let arr=[23,56,67,2,5,67];
// // let neweArray=arr.slice(2,4);

// let neweArray=arr.splice(2,3,"vikas","g3",400);
// console.log(neweArray);
// console.log(arr);