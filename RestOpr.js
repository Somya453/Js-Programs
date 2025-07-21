// #The Rest Operator:
// The Rest Operator allows us to collect multiple elements into an array.

const packGroceries = (...items) => {
    return items;
}

const packedGroceries= packGroceries("apples", "bananas", "milk", "eggs");
console.log(packedGroceries);

const morePackedGroceries = packGroceries("bread", "butter", "cheese");
console.log(morePackedGroceries);