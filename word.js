
/*
Word.js: Contains a constructor, Word that depends on the Letter constructor. 
This is used to create an object representing the current word the user is attempting to guess. 
That means the constructor should define:


-An array of new Letter objects representing the letters of the underlying word

-A function that returns a string representing the word. 
	This should call the function on each letter object (the first function defined in Letter.js) 
	that displays the character or an underscore and concatenate those together.
-A function that takes a character as an argument 
	and calls the guess function on each letter object (the second function defined in Letter.js)
*/

var Letter = require('./Letter');

function Word(word) {
	//do I need to explain what a word is in this context
	this.word = word;
	//since we have to perform function on each individual letter as a Letter, this will store them
	this.wordArray = [];
	//this takes word and turns it into Letters in the array to be performed upon
	this.lettered = function () {
		for (var i = 0; i < word.length; i++) {
			var individualLetter = new Letter(word[i]);
			this.wordArray.push(individualLetter);
		};
	}
	//this should be where we display the word using .tostring. i think. NVM .tostring makes josh head hurt
	// this creates a variable which we should be able to use to display a word
	this.display = function () {
		var wordDisplay = ""
		for (var i = 0; i < this.wordArray.length; i++) {
			wordDisplay += this.wordArray[i].renderLetter
			return wordDisplay
		};

	};

	//this should handle guesses I guess
	this.guesses = function (character) {
		for (var i = 0; i < this.wordArray.length; i++) {
			this.wordArray[i].guess(character);
		};
	};
};
