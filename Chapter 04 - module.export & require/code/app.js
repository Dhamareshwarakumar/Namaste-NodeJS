const greeting = require('./myModule');
const { add, subtract } = require('./math');

console.log('Running Entry file');
greeting(`Dhamareshwar`);

console.log('Performing addition on 5 & 3', add(5, 3));
console.log('Performing subtraction on 10 & 4', subtract(10, 4));
