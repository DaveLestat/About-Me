'use strict';
console.log('hello world');
alert('Welcome! Let\'s play a guessing game!');
//Question 1
var user = prompt('What is your name?');
alert('Hi, '+ user +'! This will be fun!');
function inquiry1 () {
  var answer1 = prompt('Does Dave like spicy food?' , 'Type yes or no').toLowerCase();
  console.log('User types answer' + answer1);
  //check if the user's answer is correct//
  //what is correct?
  //find out what the answer is?
  //toLowerCase or toUpperCase
  //use a confirm box?
  if (answer1 === 'yes' || answer1 === 'y')
  {alert('Sadly, he is the only Mexican in his family that cannot handle spicy food.');
    //if it's correct give them a point
  }else {
    //if it is NOT correct, tell them to try again
    alert('Exactly! Oddly enough, he will not eat spicy food to save his life.');}
}
//call function
inquiry1();
// Question 2
function inquiry2 () {
  var answer2 = prompt('Is David lazy?' , 'Type yes or no').toLowerCase();
  console.log(answer2);
  if (answer2 === 'yes' || answer2 === 'y') {
    alert('Well, yes, sort of.  But he is also very driven. He simply enjoys other things in life');
    //if it's correct give them a point
  }else{
  //no points
    alert('Let\'s just say he likes efficiency.  Lazy has a very bad reputation these days.');
  }}
//call function
inquiry2 ();
//Question 3
function inquiry3 () {
  var answer3 = prompt('Is David Mexican or Philipino?', 'Type Mexican or Philipino');
  console.log('User answer\'s Dave\'s nationality' + answer3);
  if(answer3 === 'Mexican' || answer3 === 'mexican') {
    alert('That is correct!  Dave is a Olmec descendant.');
  }else{
    alert('Nope, he is not Philipino.');}}
//call function
inquiry3 ();
//Question 4
var age = prompt('How old is David?' , 'Type a number');
console.log('User writes age: ' + age);
if(age>+36) {
  alert('Wow, that is a little high?');}
else if (age<32) {
  alert('Thank you, you are generous, but sadly those days are long behind me.');}
else
{alert('CONGRATULATIONS!!!  That is a pretty good guess!!!');}
function inquiry4 () {
  var userAge = prompt('How old are you?');
  console.log(+ user + ' writes their ' +userAge);
  while(!userAge) {
    userAge = prompt('Oh, come one, don\'t be shy. How old are you?');}
  //this is the not-equals comparison operator
  if (userAge === userAge<age) {
    alert('Ha! I\'m your senior!');
  }else if (userAge === userAge>age); {
    alert('Wow, well you certainly don\' look it');}
}
inquiry4();
function inquiry5 () {
  var colorGuess = (0);
  while(colorGuess<4)
  {var question1 = prompt('Can you guess what my favorite color is?' , 'You have 4 guesses');
    console.log('User answers favorite color' + question1);
    if(question1 === 'black' || question1 === 'Black')
    {alert('Good guess!'); break;}
    else(alert('Nope, you have a few more tries'));
    {colorGuess++;}}
  var userGuess = 0;
  var favFoods = ['pizza', 'tacos', 'cheeseburgers', 'chicken strips'];
  while(userGuess<6)
  {var myFoods = prompt('Can you guess four of my favorite foods?' , 'You have 7 guesses');
    console.log('User types favorite foods' +myFoods);
    if(myFoods === favFoods[0] || myFoods === favFoods[1]|| myFoods === favFoods[2] || myFoods === favFoods[3]) {alert('Good! Keep going!');break;}
    else(alert('Nope, try again!'));
    {userGuess++;}}
}
inquiry5 ();
alert('Very good, ' +user+', this has been fun!');



