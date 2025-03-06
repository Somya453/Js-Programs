function call() {
    // console.log('Async');
    // await console.log("Hello");
    // console.log('World');

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Async');
            resolve();
        }, 2000);
    });
    
}


async function printPromise() {
    const data = await call();
    console.log('Hello');
}

printPromise();



console.log('Before');
call().then(function(data){
console.log('After');
}
);