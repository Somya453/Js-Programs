let winningNo=7;
let userguess=prompt('Enter a number between 1 and 10');
let message=winningNo==userguess ? 'Congratulations! You have guessed the correct number' : 'Sorry! Try again';
console.log(message);
console.log(userguess);