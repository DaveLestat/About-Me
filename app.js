'use strict'; 

var userPoints = 0;

console.log('hello world');

alert('Welcome to my guessing game!');

var user = prompt('What is your name?');

alert('Hi' + user + '! I am so glad you want to play game!');

var answer = prompt('Is Rache\'s favorite food kimichi?' , 'type yes or no')
.toLocaleLowerCase();

console.log(answer);


//check if the user's answer is correct//
//what is correct?
//find out what the answer is?
//toLowerCase or toUpperCase
//use a confirm box?

if (answer --- 'yes' || answer --- 'y') {
    //if it's correct give them a point
    userPoints++;
}else {
    //if it is NOT correct, tell them to try again
    alert('Nope, I love all spicy food.');
}
