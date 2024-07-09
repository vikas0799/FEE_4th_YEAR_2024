// class person{
//     constructor(name,age,village){
//         this.name=name;
//         this.age=age;
//         this.village=village;
//     }
//     village(){
//         console.log("welcom to my village");
//     }
//     dist(){
//         console.log("welcome to my district"+this.age);
//     }
// };
// // console.log(person);
// // let vikas=new person("john wick",50,"sangrooor");
// vikas.dist();
// // console.log(vikas);






let student1={
    fname:"vikas",
    lname:"patel",
    display:function(address,age){
        console.log(this);
        console.log(this.fname+" "+this.lname+" "+address+" "+age);
    },
    print:function(){
        console.log(this);
    }
};


let student2={
    fname:"punit",
    lname:"maurya"
};


let showing=function(aug,state,vill){
    console.log(this);
    console.log(aug+" "+state+" "+vill);
}

// function borrowing
// student1.display();
// student1.display.call(student2,"pratapgarh up",25);


// showing.call(student1,"mr wick","up","hasanpur");
//showing.apply(student1,["1",23,45,987]);  // aug passing diffrence from call only

let ans=showing.bind(student1,"vikas","up","amh","hasanpur")  //not directly calling
console.log(ans);
ans();