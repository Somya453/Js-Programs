function myPromise(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num1 === 0) {
            reject('Error: Invalid Input, please enter a non-zero number.');
        }else{
            resolve(num2 / num1);
        }
        
    });
    
}


myPromise(0, 10).then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(error);
});


myPromise(5, 10).then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(error);
});