const button = document.querySelector("#button");
const text = document.querySelector("#text");

button.onclick = getQuote;

function getQuote() {
  fetch("https://quoteslate.vercel.app/api/quotes/random")
    .then((response) => response.json())
    .then((data) => {
      text.innerText = data.quote;
      return console.log(data);
    })
    .catch((error) => console.log(error));
}
