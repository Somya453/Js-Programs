//Using Maths.random for the answers instead of yes or no!

// 1. Store possible answers
const answers = [
  "Yes - definitely.",
  "It is decidedly so.",
  "Without a doubt.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."
];

// 2. Get the question from the command line arguments
const question = process.argv.slice(2).join(' ');

if (!question) {
  console.log("Please ask a Yes or No question.");
  process.exit(1);
}

// 3. Pick a random answer
const randomIndex = Math.floor(Math.random() * answers.length);
const answer = answers[randomIndex];

// 4. Display the result
console.log(`Question:\t${question}`);
console.log(`Magic 8 Ball:\t${answer}`);
