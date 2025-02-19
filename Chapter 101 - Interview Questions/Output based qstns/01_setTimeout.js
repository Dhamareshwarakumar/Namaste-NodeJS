console.log("Hello World");

var a = 123456789;
var b = 987654321;

setTimeout(() => {
    console.log("Call me ASAP");
}, 0);

function multiply(a, b) {
    return a * b;
}

console.log(multiply(a, b));
