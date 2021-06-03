/******************************************
project 1 - Random quote Generator
******************************************/

//  * `quotes` array
const quotes = [
  {
    quote:
      "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
    source: "Oscar Wilde",
    citation: "Irish poet",
    year: "",
  },
  {
    quote: "Anyone who has never made a mistake has never tried anything new.",
    source: "Albert Einstein",
    citation: "Theoretical physicist",
    year: "",
  },
  {
    quote:
      "Power is always dangerous.  It attracts the worst and corrupts the best.",
    source: "Ragnar Lothbrok",
    citation: "Actor",
    year: "",
  },
  {
    quote: `The truth is you don't know what is going to happen tomorrow. Life is a crazy ride, and nothing is guaranteed`,
    source: "Eminem",
    citation: "American rapper",
    year: "",
  },
  {
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts",
    source: "Winston Churchill",
    citation: "Former PM of the United Kingdom",
    year: "",
  },
  {
    quote:
      "When I was a teenager, I began to settle into school because I'd discovered the extracurricular activities that interested me: music and theater.",
    source: "Morgan Freeman",
    citation: "American actor",
    year: "",
  },
  {
    quote:
      "Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.",
    source: "Wayne Dyer",
    citation: "American author",
    year: "",
  },
  {
    quote:
      "My mama always said life was like a box of chocolates. You never know what you're gonna get.",
    source: "Forrest Gump",
    citation: "Forrest Gump",
    year: 1994,
  },
  {
    quote: "I live my life a quarter mile at a time.",
    source: "Vin Diesel",
    citation: "The Fast and the Furious",
    year: 2001,
  },
  {
    quote:
      "Would you know my name? If I saw you in heaven. Would it be the same? If I saw you in heaven",
    source: "Eric Clapton",
    citation: "Tears in Heaven",
    year: 1992,
  },
];
// * `getRandomquote` function
function getRandomquote(quotes) {
  for (let key in quotes) {
    key = Math.floor(Math.random() * 10);
    printquote(key);

    return (value = quotes[key]);
  }
}

function printquote(key) {
  console.log(quotes[key]);
}
/***
 * click event listener for the print quote button
 ***/

// button creating
const header = document.createElement("header");
const button = document.createElement("button");
button.classList.add("load-quote");
button.innerText = "Show another quote";
header.appendChild(button);

const quoteBtn = document.querySelector("#load-quote");
quoteBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const quoteBox = document.getElementsByClassName("quote-box")[0];
  quoteBox.getElementsByClassName("quote")[0].innerHTML =
    getRandomquote(quotes).quote;

  quoteBox.getElementsByClassName("source")[0].innerHTML =
    value.source +
    `<span class="citation">${value.citation}</span>` +
    `<span class="year"> ${value.year}</span>`;
});

const color = [
  "#df2020",
  "#d51de2",
  "#5d0ef1",
  "#3d5cf5",
  "#0bb1da",
  "#B361D2",
  "#f87e20",
  "#c20a0a",
];
let i = 0;
document.querySelector("button").addEventListener("click", function () {
  i = i < color.length ? ++i : 0;
  document.querySelector("body").style.background = color[i];
});
