class person{
    constructor(name,age,village){
        this.name=name;
        this.age=age;
        this.village=village;
    }
    village_display(){
        console.log("welcom to my village");
    }
    dist(){
        console.log("welcome to my district"+this.age);
    }
};
// console.log(person);
let krity=new person("john wick",50,"sangrooor");
// console.log(krity);
// krity.village_display();
krity.dist();



