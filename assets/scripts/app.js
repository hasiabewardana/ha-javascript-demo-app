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

// ### Destructuring - start ###
const userData = ['Kane', 35];

// Without destructuring
// Array
const userName = userData[0];
const age = userData[1];

console.log(userName);
console.log(age);

// Object
const userObject2 = {
    name: 'Jackson',
    age: 55
}

const name2 = userObject2.name; 
const age3 = userObject2.age;

console.log(name2);
console.log(age3);

// With destucturing
// Array
const [userName2, age2] = ['Kane', 35];

console.log(userName2);
console.log(age2);

// Object
const {name: name3, age: age4} = {
    name: 'Jackson',
    age: 55
}

console.log(name3);
console.log(age4);
// ### Destructuring - end ###

// ### Spread operator - start ###
// Array
const newHobbies = ['Dancing'];
const allHobbies = [...hobbies, ...newHobbies]

console.log(allHobbies);

// Object
const roleObject = {
    isAdmin: true
}

const newUserObject = {
    ...userObject2,
    ...roleObject
}

console.log(newUserObject);
// ### Spread operator - end ###

// ### If statement - start ###
const password = prompt('Enter your password!');

if (password === 'Hello'){
    console.log(password + ' works');
}else if (password === 'hello'){
    console.log(password + ' works');
}else{
    console.log(password + " doesn't work");
}
// ### If statement - end ###

// ### For loop - start ###
const counties = ['India', 'Canada', 'Japan'];

for(const country of counties){
    console.log(country);
}
// ### For loop - end ###

// ### Modify the DOM - start ###
const list = document.querySelector('ul');
list.remove();
// ### Modify the DOM - start ###

// ### Functions as values - start ###
// For built-in functions
function handleTimeout(){
    console.log('Timed out!');
}

setTimeout(handleTimeout, 2000);
setTimeout(() => {console.log('Timed out again!')}, 3000);

// For custom functions
function greet(greetFunc){
    greetFunc();
}

greet(() => {console.log('Welcome buddy!')});
// ### Functions as values - end ###