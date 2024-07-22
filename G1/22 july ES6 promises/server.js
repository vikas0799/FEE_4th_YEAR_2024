fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
.then((responce)=>{ return responce.json()})
.then((result)=>{
    console.log(result);
document.getElementsByTagName("h1")[1].innerHTML=result.bpi.EUR.rate;
})
.catch((error)=>{
    console.log(error);
})