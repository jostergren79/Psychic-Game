// variables defined

const playerGuess = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const computerGuess = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const win =0;
const loss =0;
const playerWin = document.getElementById(player-Win)
const playerLose = document.getElementById(player-Lose)
const guessesLeft = document.getElementById(guesses-Left)
const guessed = document.getElementById(guess-ed)

///--------------------------------///

// from RPS this function Randomly chooses a choice from the options array. This is the Computer's guess.
// from RPS This function is run whenever the user presses a key.

document.onkeyup = function(event) {
const playerGuess = event.key;
}

const computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// beginning working on functions.

 if ((playerGuess === computerGuess)) {
        wins++;
    } else {
        losses++;
    }











 