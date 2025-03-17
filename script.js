'use strict';

// we are going to explore DOM manipulation

// Go Live in VS Code and, in FireFox, open the Dev Tools 

// show in console the whole element that has class='message'
console.log(document.querySelector('.message'));

// show in console only the text of that element
//console.log(document.querySelector('.message').textContent);

// now change or manipulate the message on the web page
//document.querySelector('.message').textContent = '🎉 Correct Number!';

// show in console only the text of that element
//console.log(document.querySelector('.message').textContent);

// do the same as above for the element with class 'number'

// do the same for the element with class 'score'

// what about manipulating input elements?
// show in console the whole element that has class='message'
//console.log(document.querySelector('.guess'));

// show in console only the value (it's a number) of that element
//console.log(document.querySelector('.guess').value);

// notice the value doesn't show up in the Devtools?! (b/c no value yet!)
// now, can you change the value of the input element to 8?
// Run the repl to see if you changed the page

// show you changed the value in the Devtools console too

// what else can you manipulate on the page using JavaScript DOM manipulation?
// can you change the background color to green? How do we select and manipulate CSS properties from our JavaScript code?






/*   
After we finish the Dragon game and also this Guess My Number game, I 
will ask you to improve this Guess My Number game. Here's the challenge:

///////////////////////////////////////
// Coding Challenge #1


Implement game functionality so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

/////////////////////////////////////
// Coding Challenge #2

/*
Implement a game where the player guesses numbers between 1 and 100!

What are the steps? Can you fill them in?
1. ???
2. ???
3. ???

GOOD LUCK 😊
*/
