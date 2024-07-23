function display(callback){
    console.log("hello ");
    setTimeout(() => {
        console.log("Async task complted");
        callback();
    }, 3000);
}

//nested callback or callback hell or pyramid of doom
display(()=>{
    console.log("task 1 completed");
    display(()=>{
        console.log("task 2 completed");
        display(()=>{
            console.log("task 3 completed");
        })
    })
})