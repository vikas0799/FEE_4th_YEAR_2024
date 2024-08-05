const p1 = new Promise((resolve,reject)=>{
    setInterval(() => {
        resolve("Promise resolved value");
    }, 5000);
});



const p2 = new Promise((resolve,reject)=>{
    setInterval(() => {
        resolve("Promsie resolved");
    },10000);
});

async function getD(){
    // Js Engine was waiting for promise to resolved
    console.log("YO");
    let d=new Date();
    console.log(d);
    const val = await p1;
    d=new Date();
    console.log(d);
    console.log(val);
    console.log("Namaste India"); 

    const val2 = await p2;
    d=new Date();
    console.log(d);
    console.log(val2); 
    console.log("Namaste India 2"); 
}

getD();