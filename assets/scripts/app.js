// ### Import feature - start ###
import message, {apiKey as key, apiSecret as sec} from "./util.js";
import * as util from "./util.js"

// Without alias
console.log(message)
console.log(key);
console.log(sec);

// With alias
console.log(util.default)
console.log(util.apiKey);
console.log(util.apiSecret);
// ### Import feature - end ###

// ### Variables & values - start ###
// Variables
let name = 'John Smith';
name = 'Peter Nicol';

console.log(name);

// Constants
const greetMessage = 'Good Morning!';
// greetMessage = 'Good Evening!'; It gives an error.

console.log(greetMessage);
// ### Variables & values - end ###

// ### Operators - start ###
// Math operators
console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
console.log(10 % 5);

// Assignment operator
console.log('Good' + ' Night!');

//Equality operator
console.log(10 === 10);

// Comparison operators
console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 5);
console.log(10 <= 5);
// ### Operators - end ###