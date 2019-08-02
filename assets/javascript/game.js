//--------------------------------//final copy of homework2//--------------------------------//

const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

let win = 1;
let loss = 1;
let tries = 9;
let playerGuess = "";
let ListplayerGuess = "";

const winsText = document.getElementById("playerWins")
const lossesText = document.getElementById("playerLoses")
const triesText = document.getElementById("remainingGuesses")
const lettersText = document.getElementById("guessedAlready")

triesText.textContent = "Guesses Left: " + tries;
lettersText.textContent = "Your Guesses So Far: " + playerGuess;


// fuction for  onkey event where tries is decrement by one and playerGuess becomes the event key

document.onkeyup = function(event) {

    tries--;
    
    playerGuess = event.key;


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

// this information updates text content of elements 

    triesText.textContent = "Guesses Left: " + tries;
    ListplayerGuess = ListplayerGuess + " " + playerGuess; //added content ListplayerGuess to create a list of playerGuessed 
    lettersText.textContent = "Your Guesses So Far: " + ListplayerGuess;

    if (tries === 0)
    {
        alert('you are done!');
        return;
    }

}








 