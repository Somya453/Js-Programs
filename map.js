let arr = [1, 2, 3, 4, 5];
arr.map((element, index, arr) => {
    return element * 2;
    console.log(element, index, arr);
});


console.log("array:", arr);

//map

let n = 25;
let ar = new Array(25).fill(0).map((_, i) => i + 1);
console.log(ar);
