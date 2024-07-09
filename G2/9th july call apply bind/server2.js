let student1 = {
  fname: "vikas",
  lname: "patel",
  display: function (address,age) {
    console.log(this);
    console.log(this.fname + " " + this.lname+" "+address+" "+age);
  },
  print: function () {
    console.log(this);
  }
};
// student1.display("chandigarh",22);
let student2 = {
  fname: "punit",
  lname: "maurya",
};
// student1.display.call(student2,"chandigarh",23);
// student1.display.apply(student2,["chandigarh",23]);


let showing=function(aug,state,vill){
    console.log(this);
    console.log(aug+" "+state+" "+vill);
}

// function borrowing
// student1.display();
// student1.display.call(student2,"pratapgarh up",25);

showing.call(student1,"mr wick","up","hasanpur");
//showing.apply(student1,["1",23,45,987]);  // aug passing diffrence from call only

// let ans=showing.bind(student1,"vikas","up","amh","hasanpur")  //not directly calling
// console.log(ans);
// ans();
