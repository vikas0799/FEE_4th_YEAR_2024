 let x= new Promise((resolve, reject) => {
    resolve("chitkara university");
    // reject("network problem");

  });


  x.then((value)=>{
    console.log("resolved promise and consumed");
    console.log(value);
  })
  .catch((er)=>{
    console.log(er);
  })
  
// x.then().catch()

//   console.log(x);
//   console.log(typeof(x));