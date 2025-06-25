// Array of quotes
const quotes = [
  {
    text: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "Don't let yesterday take up too much of today.",
    author: "Will Rogers",
  },
  {
    text: "It's not whether you get knocked down, it's whether you get up.",
    author: "Vince Lombardi",
  },
  {
    text: "If you are working on something exciting, it will keep you motivated.",
    author: "Steve Jobs",
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett",
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James",
  },
];

let quote = document.querySelector("#quote");
let author = document.querySelector("#author");
let btn = document.querySelector("#new-quote");

let currentIndex = -1;

function getRandomQuote() {
  let rand;
  do {
    rand = Math.floor(Math.random() * quotes.length);
  } while (rand === currentIndex);

  currentIndex = rand;
  quote.innerText = quotes[rand].text;
  author.innerText = `- ${quotes[rand].author}`;
}
getRandomQuote();
btn.addEventListener("click", getRandomQuote);
