"use strict";
// Basic Types
const id = 5;
const firstName = "Patrick";
const male = true;
let x = "Hello";
x = true;
// Array
const names = ["Patrick", "John", "Doe"];
const numbers = [1, 2, 3];
const list = [1, true, "free"];
// Tuple - Specify the type of every element in the list in the order that they appear
const person = [id, firstName, male];
// An array of tuples
const employee = [
    [1, "Patrick"],
    [2, "John"],
];
// Union
let userId;
userId = "U-24";
userId = 24;
// Enum
var Direction1;
(function (Direction1) {
    // Each direction has a number value, usually starting from 0
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "DOWN";
    Direction2["Left"] = "LEFT";
    Direction2["Right"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
// Object
const user1 = {
    id: 1,
    firstName: "Patrick",
};
const user2 = {
    id: 2,
    name: "John",
};
// Type Assertion
let cid = 1;
// An instance where you want the cid to only be a certain type
let customerId = cid; // or <number>cid
customerId = 12;
// Functions
function addNumber(x, y) {
    return x + y;
}
// addNumber(2, "4");
// functions with no return value
const log = (message) => console.log(message);
const user3 = {
    id: 3,
    name: "Jane",
};
const agent1 = {
    id: 1,
    fullName: "Agent Smith",
};
const randomUser = {
    id: 4,
    name: "Anonymous",
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now Registered`;
    }
}
class Person2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now Registered`;
    }
}
const brad = new Person(1, "Brad");
const mike = new Person(2, "Mike");
// SubClasses
class Employee extends Person2 {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "John", "Developer");
// console.log(emp.register());
// Generics - Used to build reusable components
function getArray(items) {
    return [...items];
}
let numArray = getArray([1, 2, 3, 4]); // array of numbers
let strArray = getArray(["brad", "john", "joe"]); // array of strings
numArray.push(3);
// strArray.push(3); // error
