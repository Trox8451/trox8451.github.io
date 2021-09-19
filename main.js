var random_number = Math.random();
random_number *= 10; random_number++;
random_number = Math.floor(random_number);
var number_of_guesses = 0

function guess_the_number(number=random_number) {
	while(true) {
		number_guessed = prompt(`guess a number between 1 and 10`);
		number_of_guesses++;
		if(number==number_guessed) {
			alert(`Wow you actually guessed the right one, it took you ${number_of_guesses} tries`);
			break;
		}
		else if(number>number_guessed) {
			alert(`No you're stupid and I hate you, your number is too low`);
		}
		else if(number<number_guessed) {
			alert(`No you're stupid and I hate you, your number is too high`);
		}
	}
}
