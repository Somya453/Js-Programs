// # Spread Operator
const groceryList = ["apples", "bananas", "milk", "eggs"];
const householdItems = ["paper towels", "dish soap", "toothpaste"];

const combinedList = [groceryList, householdItems];

console.log(combinedList);


// #we combine them together, we use the spread operator by using three (...) dots before the array names
const combinedListSpread = [...groceryList, ...householdItems];
console.log(combinedListSpread);