function display(x){
    setTimeout(() => {
        console.log("Async task");
        x();
    }, 3000);
}
display(()=>{
    console.log("task 1 complted");
    display(()=>{
        console.log("task 2");
        display(()=>{
            console.log("task 3 ");
            display(()=>{
                console.log("task 4");
            })
        })
    })
});