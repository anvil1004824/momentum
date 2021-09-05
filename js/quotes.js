const quotes = [
  {
    quote: "Don't forget to eat kimchi.",
    author: "Nicolas Serrano Arevalo",
  },
  {
    quote: "POP",
    author: "Pop cat",
  },
  {
    quote: "Nyan",
    author: "Nyan cat",
  },
  {
    quote: "YEE",
    author: "Some dino",
  },
  {
    quote: "Ladies & Gentlemen, we got him.",
    author: "Paul Bremer",
  },
  {
    quote: "No God! Please No!",
    author: "Michael Scott",
  },
  {
    quote: "Never gonna give you up.",
    author: "Rick Astley",
  },
  {
    quote: "I am a Korean.",
    author: "Tim Sweeny",
  },
  {
    quote: "Let Me In!",
    author: "Eric Andre",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = `-${todaysQuote.author}-`;
