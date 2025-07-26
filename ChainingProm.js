// // #Chaining Promises

// function prepareOrder(callback) {
//   const result = "Preparing order 🧑‍🍳";
//   callback(result);
// }

// function serveOrder(result, callback) {
//   const result2 = `${result}, and now serving. Enjoy! 🍲`;
//   callback(result2)
// }

// // Calling the operations
// prepareOrder(function(result) {
//   serveOrder(result, function(result2) {
//     console.log(result2);
//   });
// });


function prepareOrder() {
  return new Promise((resolve) => {
    const result = "Preparing order 🧑‍🍳";
    resolve(result);
  })
}

function serveOrder(result) {
  return new Promise((resolve) => {
    const result2 = `${result}, and now serving. Enjoy! 🍲`;
    resolve(result2);
  })
}

prepareOrder()
  .then((result) => serveOrder(result))
  .then((result2) => {
    console.log(result2)
  })
  .catch((error) => {
    console.log("Error:", error);
  })
  fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));