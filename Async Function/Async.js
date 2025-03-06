function Promise() {
    const isTrue = true;
    return new Promise(function(resolve, reject) {
        if (isTrue) {
            resolve('Success');  //resolve
        } else {
            throw new Error('Error: Rejected'); //reject
            reject('Error: Rejected');
        }
    });
    
}

async function printPromise() {
    try {
        const data = await Promise();
        console.log(data);
    }
    catch (error) {
        console.error('error: catch me');
    }
}

printPromise();
console.log('Print Me');
