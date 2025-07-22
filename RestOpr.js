// #The Rest Operator:
// The Rest Operator allows us to collect multiple elements into an array.

const packGroceries = (...items) => {
    return items;
}

const packedGroceries= packGroceries("apples", "bananas", "milk", "eggs");
console.log(packedGroceries);

const morePackedGroceries = packGroceries("bread", "butter", "cheese");
console.log(morePackedGroceries);


// // # Rest Operator with Function Parameters
// const calculateTotal = (basePrice, taxRate, ...additionalFees) => {
//     let total = basePrice + (basePrice * taxRate);
//     for (let fee of additionalFees) {
//         total += fee;
//     }
//     return total;
// }


// example:
const planVacation = (...destinations) => {
    return destinations;
}

const destinationOne = planVacation("Paris", "Tokyo", "New York", "Sydney");
console.log(destinationOne);

const destinationTwo = planVacation("London", "Berlin");
console.log(destinationTwo);






