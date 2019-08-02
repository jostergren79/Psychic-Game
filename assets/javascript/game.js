//--------------------------------//final variable layout//--------------------------------//

const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let win = 0;
let loss = 0;
let tries = 9;

const winsText = document.getElementById("playerWins")
const lossesText = document.getElementById("playerLoses")
const triesText = document.getElementById("remainingGuesses")
const lettersText = document.getElementById("guessedAlready")

//--------------------------------//initial layout of onkeyupfunction layout//--------------------------------//

//--------------------------------confirmed onkeyup is functioning and win losses are tabulating--------------------------------//


document.onkeyup = function(event) {

const playerGuess = event.key;

const computerGuess = letters[Math.floor(Math.random() * letters.length)]; 

if (playerGuess === computerGuess) {

    winsText.textContent = "Wins: " + win++;
    tries--
} 

if (playerGuess !== computerGuess) {

    lossesText.textContent = "Losses: " + loss++;
}
}

//--------------------------------//initial update element textContent function layout//--------------------------------//


// function updateScore() {
//     document.querySelector("remainingGuesses").innerHTML = "Guesses Left: " + tries - 1;
// }

triesText.textContent = "Guesses Left: " + tries;

// lettersText.textContent = "Your Guesses So Far: " + playerGuess;








 