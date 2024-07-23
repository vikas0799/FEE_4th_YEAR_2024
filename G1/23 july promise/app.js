function display(x) {
  console.log(" calling methods");
  setTimeout(() => {
    console.log("data getting");
    x();
  }, 3000);
}

display(() => {
  console.log("task 1");
  display(()=>{
    console.log("task 2");
    display(()=>{
        console.log("task 3");
    })
  })
});
