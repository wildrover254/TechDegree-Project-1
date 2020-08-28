/**
 * Array of quotes that the program will display on the page. 
 * JW
**/
const quotes = [
  {
    quote: "You must be the change you wish to see in the world.",
    source: "Mahatma Gandhi",
  },
  {
    quote: "The only thing necessary for the triumph of evil is for good men to do nothing.",
    source: "Edmund Burke",
    citation: "A Letter Addressed to Thomas Mercer"
  },
  {
    quote: "Life is trying things to see if they work.",
    source: "Ray Bradbury"
  },
  {
    quote: "Not all those who wander are lost.",
    source: "J.R.R. Tolkien",
    citation: "The Lord of the Rings",
    year: 1954,
    tags: "#literature"
  },
  {
    quote: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
    source: "Malcolm X", 
    year: 1964,
    tags: "#inspiring #historicalfigure"
  },
  {
    quote: "It's dangerous to go alone! Take this.",
    source: "The Old Man, ",
    citation: "The Legend of Zelda",
    tags: "#gaming"
  }
];

/**
 * The getRandomQuote arrow function generates a random number, 
 * then uses the number to return a random quote from the quotes array.
 * Uses quotes.length so that the quotes array can be updated and any
 * new quotes can be retrieved without updating the function.
 * JW
**/ 
const getRandomQuote = () => {
  const num = Math.floor(Math.random() * quotes.length);
  return quotes[num];
  };

/**
 * The printQuote function stores the value returned by the previous function 
 * in the 'quote' variable. The 'html' variable contains a template literal
 * that displays the quote and source properties of the object returned in 
 * getRandomQuote. Three if statements then check for additional properties and 
 * add them to the template literal contained in 'html'. Finally the entire
 * template literal is returned.
 * JW 
**/
const printQuote = () => {
  const quote = getRandomQuote();
  let html = `<p class="quote"> ${quote.quote} </p><p class="source"> ${quote.source}`;

 if (quote.citation) {
   html += `<span class ="citation"> ${quote.citation} </span>`; 
 };

 if (quote.year) {
   html += `<span class = "year"> ${quote.year} </span>`;
 };

 if (quote.tags) {
   html += `<span> ${quote.tags} </span>`;
 };

 html += `</p>`;

function randNum() {
  let num = Math.floor(Math.random() * 256);
  return num;
 };
function bgColor (value) {
  const color = `rgb (${value}, ${value}, ${value})`;
  return color;
  }
let background = bgColor(randNum());

document.body.style.backgroundColor = "background";

return document.getElementById('quote-box').innerHTML = html;
};

var interval = window.setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);