async function crypto(){
   let responce=await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
      //responce contain a JSON fromated data
     let data=await responce.json();  //method to convert from json to js object
     console.log(data.bpi.USD.rate);
     document.getElementsByTagName("p")[0].innerHTML=data.bpi.USD.rate;
document.getElementsByTagName("p")[1].innerHTML=data.bpi.EUR.rate;
document.getElementsByTagName("p")[2].innerHTML=data.disclaimer;

}

crypto();