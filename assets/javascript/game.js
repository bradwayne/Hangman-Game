
// words to guess
var randomWords = 
	['spurs',
	'saloon',
	'revolver',
	'horseback',
	'brothel',
	'ambush',
	'draw',
	'wagon',
	'holster'];

console.log(randomWords.length);

// players options
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
       'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
       't', 'u', 'v', 'w', 'x', 'y', 'z'];

// counters
var wins = 0;

var losses = 0;

var guessesRemaining = 9;

var lettersGuessed = 0;

var guesses = [];

//loop to provid empty letter indicators
for (var i = 0; i < currentWord.length; i++) {
	guesses [i] = "_";
}

document.onkeyup = function(keyPressed) {
          var userPressed = event.key;

var userInput = String.fromCharCode(event.keyCode).toLowerCase();

    var currentWord = randomWords[Math.floor (Math.random()*randomWords.length)];


function randomWords() {

	for (var i = 0; i < currentWord.length; i++) 


	if (userPressed == currentWord [i]) {
		guesses [i] = userPressed;
	}

	if (currentWord.indexOf("_") = (userPressed) >= -1) {
		(var i = 0; i < currentWord.length; i++) 
		guesses [i] = "_";
		
	}

	if (currentWord == guesses.join("")) {
		alert('Cut Him Down, He Is Free To Go!');
		wins++; 
		updateWins();
	}

	else if (guessesRemaining <= 0) {
		alert('Pull The Lever...Hang Him')
		losses++;
		updateGuessesRemaining();
	}

};

// updating wins / guesses remaining / letters guessed
function updateWins() {
        document.querySelector("#wins").innerHTML
         = "wins: " + wins;
};

function updateLosses() {
		document.querySelector('#losses').innerHTML
		= "losses: " + losses;
};

function updateNumberOfGuesses() {
        document.querySelector("#guesses-remaining").innerHTML
         = "guesses remaining: " + guessesRemaining;
};

function updateLettersGuessed() {
        document.querySelector("#letters-guessed").innerHTML
         = "letters guessed: " + lettersGuessed;
};

wordIndex++;
randomWords();

}
};