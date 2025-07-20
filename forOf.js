const name = "dumbo";

for (let letter of name) {
  console.log(letter);
}

const boroughs = ["brooklyn", "manhattan", "the bronx", "queens", "staten island"];

for (let borough of boroughs) {
  console.log(borough);
}

const person = {
  name: "Austin",
  age: 29,
  occupation: "musician"
}

for (let info in person) {
  console.log(person[info]);
}

