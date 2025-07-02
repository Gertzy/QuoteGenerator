const button = document.querySelector("#button");
const text = document.querySelector("#text");
const authortext = document.querySelector("#authortext");

button.onclick = getQuote;

function getQuote() {
  fetch("https://quoteslate.vercel.app/api/quotes/random")
    .then((response) => response.json())
    .then((data) => {
      text.innerText = data.quote;
      authortext.innerText = "-" + data.author;
      return console.log(data);
    })
    .catch((error) => {
      console.log(error);
      text.innerText = "An error occurred while fetching the quote.";
      authortext.innerText = "";
      console.error("Error fetching quote:", error);
    });
}
