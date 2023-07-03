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

// ### Functions - start ###
// Functions without parameter list
function greetUser(){
    console.log('Good Morning! ' + 'John');
}

// Functions with parameter list
function greetUser2(user, greetMessage){
    console.log(greetMessage + ' ' + user);
}

// Functions with default parameter values
function greetUser3(user, greetMessage = 'Good Day!'){
    console.log(greetMessage + ' ' + user);
}

// Function with return value
function greetUser4(user, greetMessage){
    return greetMessage + ' ' + user;
}

// Function calls
greetUser();
greetUser2('Peter', 'Good Afternoon!');
greetUser3('David');
const greeting = greetUser4('Anne', 'Good Night!');
console.log(greeting);
// ### Functions - end ###

// ### Arrow function - start ###
// With no parameter and not returning a value
() => {
    console.log('With no parameter and not returning a value');
}

// With no parameter and returning a value
() => 'With no parameter and returning a value';

// With one parameter and not returning a value
age => {
    console.log(age);
}

// With one parameter and returning a value
age => age;

// With multiple parameters and not returning a value
(user, greetMessage) => {
    console.log(greetMessage + ' ' + user);
}

// With multiple parameters and returning a value
(user, greetMessage) => greetMessage + ' ' + user;
// ### Arrow function - end ###

// ### Objects & classes - start ###
// Object
const user = {
    name: 'James',
    age: 40,
    getInfo(){
        console.log('name = ' + this.name + ' and age = ' + this.age);
    }
}

console.log(user);
console.log(user.name);
console.log(user.age);
user.getInfo();

// Class
class User{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getInfo(){
        console.log('First Name = ' + this.firstName + ' and Last Name = ' + this.lastName);
    }
}

// Object creation from a class
const userObject = new User('Riky', 'Ponting');
userObject.getInfo();
// ### Objects & classes - end ###

// ### Arrays - start ###
const hobbies = ['Gardening', 'Cycling', 'Painting', 'Jogging'];

console.log(hobbies);
console.log(hobbies[0]);

// Find the index of an element
const index = hobbies.findIndex(item => item === 'Cycling');
console.log(index);

// Map to a new array
const editedHobbies = hobbies.map(item => ({text: item + '!'}));
console.log(editedHobbies);
// ### Arrays - end ###