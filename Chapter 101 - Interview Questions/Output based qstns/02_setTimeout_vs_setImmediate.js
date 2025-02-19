console.log("Hello World");

setTimeout(() => {
    console.log("Call me ASAP, SetTimeout");
}, 0);

setImmediate(() => {
    console.log("Call me ASAP, SetImmediate");
});
