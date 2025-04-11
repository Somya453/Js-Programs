let age=15;
let isAdult = (age >= 18) ? "Adult" : "Not Adult";
console.log(isAdult); // Output: Not Adult



let mode="dark";
let theme = (mode === "dark") ? "Dark Mode" : "Light Mode";

let color;
if (theme === "Dark Mode") {
    color = "black";
}

if (theme === "Light Mode") {
    color = "white";
}
console.log(color); // Output: black