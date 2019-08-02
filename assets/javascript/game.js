//--------------------------------//final variable layout//--------------------------------//

const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let win = 1;
let loss = 1;
let tries = 9;


const winsText = document.getElementById("playerWins")
const lossesText = document.getElementById("playerLoses")
const triesText = document.getElementById("remainingGuesses")
const lettersText = document.getElementById("guessedAlready")

// this function occurs on key press up and returns the value of the pressed key as the playerGuess value.
document.onkeyup = function(event) {

const playerGuess = event.key;
let triesleft = tries - 1;

// this defines the computerGuess as a random letter this is determined by the floor or bottom number of the array times the length in this case 1*26

const computerGuess = letters[Math.floor(Math.random() * letters.length)]; 

// this if statement increments the win value a point if there is a match

if (playerGuess === computerGuess) {

    winsText.textContent = "Wins: " + win++;
   
} 
// this if statement increments the loss value a point if there is a mismatch

if (playerGuess !== computerGuess) {

   lossesText.textContent = "Losses: " + loss++;    
}
}

// tries is where I'm having trouble I think, I can't seem to figure out where I can reduce this incrementally






//--------attempting to use textContent to update the corresponding HTML elements didn't work, what did I miss?-------------------------//

// this is for the number of tries it should update the string to include " Guesses Left: + a number value for tries"

triesText.textContent = "Guesses Left: " + tries;

// this is for the playerGuesses it should return the key value pressed on key press but failed to work.

lettersText.textContent = "Your Guesses So Far: " + playerGuess;








 