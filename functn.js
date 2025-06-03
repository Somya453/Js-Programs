let num1=15;
let num2=5;
let result;
function add(a, b, callback) {
    //console.log(a+b);
    result = a + b;
    callback(result);
}

function callback(output) {
    console.log(output);
    
    console.log('This is a Callback function.');
    
}

add(num1, num2, callback);