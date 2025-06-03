const greet=(name, callback)=>{
    console.log("Hello"+' '+name+'!');
    callback();
    
}

// Callback function
// const call=(greet, name) => {
//     greet(name);
// }

greet("John", () => {
    console.log("This is a callback function.");
});


