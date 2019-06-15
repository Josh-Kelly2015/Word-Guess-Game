// list variables i will need in this code
var guessingWords = ["courage", "muriel", "mallet", "eustace"]
var wins
var loses
var guessesRemaining
var correctLetters
var wrongLetters
// var guesses
//alert to begin game. refresh to test.
alert("Press any key to begin!")


//call a random word 
 var randomWord = guessingWords[Math.floor(Math.random() * guessingWords.length)];

//console.log(randomWord(guessingWords));

//display random word in my correctLetters div as _ _ _ _ 
document.getElementById("correctLetters").innerHTML = randomWord.replace(/[a-z]/gi, ' _ ');

// console.log(randomWord.replace(/[a-z]/gi, ' _ '));
//listen for key strokes from the user to determine if those keys are part of the word
document.addEventListener("KeyboardEvent", function() {
    
}





//take correct keys and put it in place of underscores, wrong keys go in the #wrongLetters tag
//do not repeat wrong letters



// Every 6 wrong key strokes is a loss, every correctly guess word is a win




//countdown of chances to win



