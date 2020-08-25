/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

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
    source: "Ray Bradbury",
  },
  {
    quote: "Not all those who wander are lost.",
    source: "J.R.R. Tolkien",
    citation: "The Lord of the Rings: The Fellowship of the Ring",
    year: 1954
  },
  {
    quote: "Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
    source: "Malcolm X",
    day: "June 28, ", 
    year: 1964
  }
];

/***
 * `getRandomQuote` function
***/

/**
 * The getRandomQuote arrow function expression generates a random number, 
 * then uses the number to return a random quote from the quotes array.
 * Uses quotes.length so that the quotes array can be updated and any
 * new quotes can be retrieved without updating the function.
 * JW
**/ 
const getRandomQuote = () => {
  const num = Math.floor(Math.random() * quotes.length);
  console.log(num);
  return quotes[num];
  };

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

//document.getElementById('load-quote').addEventListener("click", printQuote, false);