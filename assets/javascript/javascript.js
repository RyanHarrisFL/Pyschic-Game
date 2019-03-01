

/* global variables that will be referenced in onkeyup function and if, else if and else statements. */
var comOptions = ["a", "b" , "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 1;
var losses = 1;
var guessLeft = 9;
var userGuess = [];
var comGuess = comOptions[Math.floor(Math.random() * comOptions.length + 1)];

/* This is the computer choice that was made */
    document.getElementById("left-text").innerHTML = guessLeft;
    console.log(comGuess + "TESTing Computer Guess");

/*this part of my function will recognize when I select action and also make a random selection from the computer.*/
document.onkeyup = function(event) {
/* This is the user choice that was made */    
    var userGuess = event.key;
    console.log(event.key);

/* This runs if the user choice was incorrect. It decrements the remaining guesses and pushes the list of guesses to the */
    if (userGuess !== comGuess && guessLeft >= 0) {
        document.getElementById("left-text").innerHTML = guessLeft;
        --guessLeft;
        /*userGuess.push(event.key);
        document.getElementById("win-text").innerHTML = userGuess;*/
    }

    else if (userGuess === comGuess) {
        document.getElementById("win-text").innerHTML = wins;
        ++wins;
        guessLeft = 9;
    } 
    
    else {
        guessLeft = 9;
        document.getElementById("lose-text").innerHTML = losses;
        ++losses;
        document.getElementById("left-text").innerHTML = 9;
        document.getElementById("guess-text").innerHTML = '';
    }
};
