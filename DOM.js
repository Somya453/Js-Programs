//DOM-Document Object Model
// // const box1=document.getElementById('box1');
// // box1.style.backgroundColor="REd";


// const container=document.getElementById('container');
// container.appendChild(newParagh);


function color(box1) {  
}

const hover=()=>{
    console.log();
}


function keyPressEvent() {
    console.log('Key was pressed');
}
    
function keyUpEvent() {
    console.log('Key up was pressed');
}

function keyDownEvent() {
    console.log('Key down was pressed');
}


// Get the box element
const box = document.getElementById("box");

box.style.width = "200px";
box.style.border = "2px solid black";

// Change the background color of the box
box.style.backgroundColor = "lightgreen";

// Add some text to the box
box.textContent = "Hello, DOM!";

let a = document.querySelector("h1"); 
a.innerHTML = "New Heading";              //to select <h1> heading

// h1.innerHTML = "Another Heading(Here we can change the heading or p.)";
console.log(a);

a.style.backgroundColor = "lightblue"; /////For styling in CSS



////Event Listener
let h1 = document.querySelector("h1");
h1.addEventListener("click", function() {
    console.log(h1);
    alert("Heading clicked!");   
});

//Event Listener in  css styling
let b = document.getElementById("box");
b.addEventListener("mouseover", function() {
    b.style.backgroundColor = "yellow";   //when mouse is over the box
});
