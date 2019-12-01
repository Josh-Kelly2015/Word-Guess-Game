// list variables i will need in this code
var gameWords = ["courage", "muriel", "mallet", "eustace"];
var wins;
var loses;
var guessesRemaining;
var wrongLetters;
//Gets a random word from guessingWords Array .
var newWord = gameWords[Math.floor(Math.random() * gameWords.length)];
console.log(newWord);
//Function to replace randomWord with underscores to display to the DOM
document.getElementById("wordAtPlay").innerHTML = newWord.replace(
  /[a-z]/gi,
  " _ "
);
// Console log random word as underscores
console.log(newWord.replace(/[a-z]/gi, " _ "));
