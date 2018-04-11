/*
Letter.js: Contains a constructor, Letter. 
	This constructor should be able to either display an underlying character 
	or a blank placeholder (such as an underscore), 
	depending on whether or not the user has guessed the letter. 
	That means the constructor should define:


-A string value to store the underlying character for the letter
-A boolean value that stores whether that letter has been guessed yet
-A function that returns the underlying character if the letter has been guessed, 
	or a placeholder (like an underscore) if the letter has not been guessed
-A function that takes a character as an argument and checks it against the underlying character,
	updating the stored boolean value to true if it was guessed correctly

*/

var inquirer = require("inquirer");

// for testing purposes
var guess = process.argv[2];

// this constructor makes letters. gives it a default value of false 
//and a string value containing the letter in question
function Letter(letter) {
	//string value containing letter actual
	this.letter = letter;
	//boolean value. Has it been guessed? true if yes
	this.guessed = false;
};

Letter.prototype.guess = function (guess) {
	this.toString();
	if (guess === this.letter) {
		this.guessed === true;
		console.log("Woot!");

	}
};

//this method returns _ or a letter depending on the value of the guessed boolean

Letter.prototype.renderLetter = function () {
	if (this.guessed === true) {
		console.log("it worked it worked lord a mercy it worked");
		return this.letter;


	} else {
		console.log("_");
		return "_";


	}


};

/*
inquirer.prompt([
	{
		type: "input",
		name: "guess",
		message: "Guess a letter!"
	}
]).then(function (answers) {
	// initializes the variable newguy to be a programmer object which will take
	// in all of the user's answers to the questions above
	var guess = answers.guess
});
*/

module.exports = Letter