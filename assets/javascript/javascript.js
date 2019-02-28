

/* global variables that will be referenced in onkeyup function and if, else if and else statements. */
var comOptions = ["a", "b" , "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 1;
var losses = 1;
var guessLeft = 20;

/* This displays variable guessLeft on the web page. */
document.getElementById("left-text").innerHTML = guessLeft;

/*this part of my function will recognize when I select action and also make a random selection from the computer.*/
document.onkeyup = function(event) {
    var userGuess = event.key;
    document.getElementById("guess-text").innerHTML = event.key;
    console.log(event.key);
    var comGuess = comOptions[Math.floor(Math.random() * comOptions.length)];
    console.log(comGuess);
    document.getElementById("left-text").innerHTML = guessLeft;

    if (userGuess !== comGuess && guessLeft >= 1) {
        document.getElementById("lose-text").innerHTML = losses;
        ++losses;
        document.getElementById("left-text").innerHTML = guessLeft;
        --guessLeft;
    }

    else if (userGuess === comGuess && guessLeft) {
        document.getElementById("win-text").innerHTML = wins;
        ++wins;
        guessLeft = 20;
    } 
    
    else {
        guessLeft = 20;
        wins = 1;
        losses = 1;
        document.getElementById("win-text").innerHTML = '';
        document.getElementById("lose-text").innerHTML = '';
        document.getElementById("left-text").innerHTML = 20;
        document.getElementById("guess-text").innerHTML = '';
    }
};
