async function PrintBitcoin() {
  // console.log("hello");
  let respone = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  let data = await respone.json();
//   console.log(data.bpi.USD.rate);
document.getElementsByTagName("p")[0].innerHTML=data.disclaimer;
}

PrintBitcoin();
