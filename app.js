'use strict'; 

var userPoints = 0;

    console.log('hello world');

    alert('Welcome! Let\'s play a guessing game!');


var user = prompt('What is your name?');

    alert('Hi, ' + user + '! This will be fun!');

var answer1 = prompt('Does Dave like spicy food?' , 'Type yes or no')
.toLowerCase();

    console.log('User types answer' + answer1);


//check if the user's answer is correct//
//what is correct?
//find out what the answer is?
//toLowerCase or toUpperCase
//use a confirm box?

    if (answer1 === 'yes' || answer1 === 'y') 
        {alert('Sadly, he is the only Mexican in his family that cannot handle spicy food.');
    //if it's correct give them a point
        userPoints++;
    }else {
    //if it is NOT correct, tell them to try again
        alert('Exactly! Oddly enough, he will not eat spicy food to save his life.');}


var answer2 = prompt('Is David lazy?' , 'Type yes or no')
.toLowerCase();

    console.log(answer2);
    if (answer2 === 'yes' || answer2 === 'y') {
        alert('Well, yes, sort of.  But he is also very driven. He simply enjoys other things in      life');
    //if it's correct give them a point
        userPoints++;
    }else {
    
    //no points
        alert('Let\'s just say he likes efficiency.  Lazy has a very bad reputation these days.');
}

var answer3 = prompt('Is David Mexican or Philipino?', 'Type Mexican or Philipino')
    console.log('User answer\'s Dave\'s nationality' + answer3);
        if(answer3 === 'Mexican' || answer3 === 'mexican') {
            alert('That is correct!  Dave is a Olmec descendant.');
            userPoints++
        }else{
            alert('Nope, he is not Philipino.');}
        



var age = prompt('How old is David?' , 'Type a number')
        console.log('User writes age: ' + age);
        if(age>+36) {
            alert('Wow, that is a little high?');} 
        else if (age<32) {
            alert('Thank you, you are generous, but sadly those days are long behind me.');}
        else
            {alert('CONGRATULATIONS!!!  That is a pretty good guess!!!');
        }

var userAge = prompt('How old are you?');
        console.log(+ user + ' writes their ' +userAge);


    while(!userAge) {
    userAge = prompt('Oh, come one, don\'t be shy. How old are you?');
    
    }
    //this is the not-equals comparison operator
    if (userAge == userAge<age) {
        alert('Ha! I\'m your senior!');
    }else if (userAge == userAge>age); {
        alert('Wow, well you certainly don\' look it');}

        var correctColor = ('black');
        var notDone = true;
        var guess;
        for (var guesses = 4; guesses > 0 && notDone; guesses--) {
          guess = prompt('What is my favorite color?'); // get user input
          guess = parseInt(guess); // convert user input to number
          if (guess === correctColor) {
            alert('That is right');
            notDone = false;
          } else if (guesses === 1) {
            alert ('you are out of guesses');
          } else {
            alert('guess again');
          }
    
     var correctColor = ('black');
        var notDone = true;
        var guess;
        for (var guesses = 4; guesses > 0 && notDone; guesses--) {
          guess = prompt('What is my favorite color?'); // get user input
          guess = parseInt(guess); // convert user input to number
          if (guess === correctColor) {
            alert('That is right');
            notDone = false;
          } else if (guesses === 1) {
            alert ('you are out of guesses');
          } else {
            alert('guess again');
          }
    
        







    alert('Very good, ' +user+', this has been fun!');

        

       
        


