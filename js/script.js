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
 * The randomColor function creates a random rgb color value and sets
 * the background of the body element to that color. It has a nested
 * arrow function (randNum) that creates a random number between 1 and
 * 256. It then calls that function three times in a template literal
 * create the rgb value, which is then assigned to the background 
 * element.
 */

function randomColor() {
  const randNum = () => Math.floor(Math.random() * 256);
  const color = `rgb(${randNum()}, ${randNum()}, ${randNum()})`;
  document.querySelector("body").style.backgroundColor = color;
}

/**
 * The printQuote function stores the value returned by the previous function 
 * in the 'quote' variable. The 'html' variable contains a template literal
 * that displays the quote and source properties of the object returned in 
 * getRandomQuote. Three if statements then check for additional properties and 
 * add them to the template literal contained in 'html'. Before the string is 
 * returned the randomColor function is called to change the background of the 
 * page.
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

 randomColor();

return document.getElementById('quote-box').innerHTML = html;
};

/**The set interval method is stored in a variable and refreshes the
 * onscreen quote every ten seconds, as per the article on setInterval on
 * MDN.
 **/
var interval = window.setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
