let complete=false;
function Promise() {
    return new Promise(function(resolve, reject) {
        if (complete) {
            resolve('Success');
        } else {
            reject('Failure');
        }
    });
}


Promise().then(function(data) {
    console.log(data);
}).catch(function(error){
    console.error(error);
});