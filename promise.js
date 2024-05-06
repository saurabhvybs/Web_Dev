const promise = new Promise(function (resolve, reject) {

    setTimeout(function () {
        resolve("hello");
    }, 2000);
});

function Onresolve(){
    console.log(promise);
}

console.log(promise);

promise.then(Onresolve);
