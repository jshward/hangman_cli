var inquirer = require("inquirer");


function Letter(letter) {
	this.letter = letter;
	this.guessed = false;
};

Letter.prototype.toString = function () {
	if (this.guessed === true) {
		return this.letter;
	} else {
		return "_";
	}
	console.log(Letter);

};
Letter.prototype.guess = function (guess) {
	if (guess === this.letter) {
		this.guessed === true
	}
};

inquirer.prompt([
	{
		name: "guess",
		message: "Guess a letter!"
	}
]).then(function (answers) {
	// initializes the variable newguy to be a programmer object which will take
	// in all of the user's answers to the questions above
	var guess = answers.guess
});

var testletter = new Letter(a)
