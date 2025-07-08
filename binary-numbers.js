//A Code For printing Binary Numbers

// Step 1: Initialize a number
let myNumber = 23;  // You can choose any integer
let binary = "";

// Step 2: Loop until the number becomes 0
while (myNumber > 0) {
  // Step 3: Check if divisible by 2
  if (myNumber % 2 === 0) {
    binary = "0" + binary;  // Add "0" to the left
  } else {
    binary = "1" + binary;  // Add "1" to the left
  }

  // Step 4: Divide number by 2 and floor it
  myNumber = Math.floor(myNumber / 2);
}

// Step 5: Output the binary number
console.log(`Binary equivalent: ${binary}`);
