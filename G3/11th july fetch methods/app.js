async function display() {
  try {
    let responce = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    let data = await responce.json();
    console.log(data.bpi.USD.rate);

    document.getElementsByTagName("p")[0].innerHTML = data.bpi.USD.rate;
    document.getElementsByTagName("p")[1].innerHTML = data.disclaimer;
  } catch (error) {
    console.log("network Error");
  }
}
display();
