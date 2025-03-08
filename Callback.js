// function add(a, b, callback) {
//     //console.log(a+b);
//     const result=a+b;
//     callback(result);
    
// }

// let num1=15;
// let num2=5;


// function callback(output) {
//     console.log(output);
    
//     console.log('This is a Callback function.');
    
// }

// add(num1, num2, callback);



//USE in Asynchronous programming
// function add(a, b, callback) {

function p1() {
    console.log("First Step");
}

function p2(callback) {
    setTimeout(function(){
        console.log("Second Step");
        callback();
    }, 2000);
        

}
function p3() {
    console.log("Third Step");
}

p1();
p2(p3);