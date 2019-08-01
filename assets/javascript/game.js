// variables defined //--------------------------------//

const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let win =0;
let loss =0;
let playerWin = document.getElementById("playerWins")
let playerLose = document.getElementById("playerLoses")
let guessesLeft = document.getElementById("remainingGuesses")
let guessed = document.getElementById("guessedAlready")

//--------------------------------////--------------------------------//

// this function waits for a key to be pressed by the player then returns that key as the playerGuess variable

document.onkeyup = function(event) {
const playerGuess = event.key;
}

// this function works to establish the computers guess at random from the letters array compares it to the userGuess and if they match adds 1 to win, if not adds 1 to loss.

let computerGuess = letters[Math.floor(Math.random() * letters.length)];
    
if ((playerGuess === computerGuess)) {
    win++;
    playerWin.textContent = win;
} 

else {
    loss++;
    playerLose.textContent = loss;
}


// this function publishes the number of guesses left to the page//--------------------------------//



// this function publishes past guesses to the page//--------------------------------//




//--------------------------------////--------------------------------//











 