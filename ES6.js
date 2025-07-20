// ES6 also gave us a new way to do repetitive things. First is the for...of loop.

const name = "dumbo";

for (let letter of name) {
  console.log(letter);
}

const boroughs = ["brooklyn", "manhattan", "the bronx", "queens", "staten island"];

for (let borough of boroughs) {
  console.log(borough);
}


const person = {
  name: "Ariana",
  age: 31,
  occupation: "Singer"
}

for (let info in person) {
  console.log(person[info]);
}

