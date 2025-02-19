const fs = require("fs");
const https = require("https");

console.log("Hello World");

var a = 987654321;
var b = 123456789;

https.get("https://dummyjson.com/products/1", (res) => {
    console.log("Data Fetched Successfully");

    res.on("data", () => {});
    res.on("end", () => {
        // If you don't close the connection manually,
        // Program will not be exited immediately,
        // It will take some time to exit beacuase...

        // There's an active HTTPS connection that keeps the event loop running.
        // The `https.get()` request creates a persistent connection
        // that needs to be properly closed.
        console.log("Connection closed");
    });
});

setTimeout(() => {
    console.log("setTimeout called for 5 sec");
}, 5000);

fs.readFile(__dirname + "/file.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
});

function multiply(a, b) {
    return a * b;
}

var c = multiply(a, b);
console.log(c);

console.log("End of sync execution");
