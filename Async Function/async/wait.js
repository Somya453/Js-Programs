// # async/await
// Chaining promises with .then()/.catch() made handling async data via callbacks more readable. But now there's another way to write it!

// The async/await keywords (released after ES6) offer a more concise way of writing promises:




// const someData = "https://dog.ceo/api/breeds/image/random";


function getSomeDataWithChain() {
  fetch(someData)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log("Something went wrong. 😦"));
}

async function getSomeDataWithAsync() {
  const response = await fetch(someData);
  if (response.ok === false) {
    throw new Error("Something went wrong. 😦");
  }
  const data = await response.json();
}

async function getSomeData() {
  const response = await fetch(someData);
  if (response.ok === false) {
    throw new Error("A problem occurred while fetching the data.");
  }
  }
