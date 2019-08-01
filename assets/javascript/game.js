//--------------------------------//initial variable layout//--------------------------------//

const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let win = 0;
let loss = 0;
let tries = 9;

const winsText = document.getElementById("playerWins")
const lossesText = document.getElementById("playerLoses")
const triesText = document.getElementById("remainingGuesses")
const lettersText = document.getElementById("guessedAlready")

//--------------------------------//initial layout of onkeyupfunction layout//--------------------------------//

document.onkeyup = function(event) {
    
const playerGuess = event.key;
let computerGuess = letters[Math.floor(Math.random() * letters.length)]; 
let tries = (tries - 1);
    
if (playerGuess === computerGuess) {

    winsText.textContent = "Wins:" (win + 1);
} 

if (playerGuess !== computerGuess) {

    lossesText.textContent = "Losses: " + (loss - 1);
}
}

//--------------------------------//initial update element textContent function layout//--------------------------------//

triesText.textContent = "Guesses Left: " + tries;
lettersText.textContent = "Your Guesses So Far: " + playerGuess;








 