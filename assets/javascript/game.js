// list variables i will need in this code
var guessingWords = ["courage", "muriel", "mallet", "eustace"]
var wins
var loses
var guessesRemaining

var wrongLetters
// var guesses
//alert to begin game. refresh to test.
alert("Click okay to begin!")


//call a random word 
var randomWord = guessingWords[Math.floor(Math.random() * guessingWords.length)];
console.log(randomWord);


//display random word in my correctLetters div as _ _ _ _ 
document.getElementById("correctLetters").innerHTML = randomWord.replace(/[a-z]/gi, ' _ ');
// console.log(randomWord.replace(/[a-z]/gi, ' _ '));


//listen for key strokes from the user to determine if those keys are part of the word
document.addEventListener("keyup", function (event) {
    console.log(event.key);

    // if true replace _ with its correct value
    if (randomWord.includes(event.key)) {
        console.log("that letter is in the word");
        var newStr = event.key.replace(randomWord);
        document.getElementById("correctLetters").innerHTML = newStr;

    }

    else {
        console.log("not in the word");
        // console.log(randomWord);
        // console.log(event.key);
        document.getElementById("wrongLetters").innerHTML = (event.key)
    }
})






//take correct keys and put it in place of underscores, wrong keys go in the #wrongLetters tag
//do not repeat wrong letters



// Every 6 wrong key strokes is a loss, every correctly guess word is a win




//countdown of chances to win



