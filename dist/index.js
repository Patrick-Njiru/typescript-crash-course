"use strict";
var _a;
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
// Ideal for key-value pairs
const person = [2, "Patrick"];
// person.push('j')
// console.log(person)
// An array of tuples
const employee = [
    [1, "Patrick"],
    [2, "John"],
];
// employee.push
// Union - |
let userId;
userId = "U-24";
userId = 24;
// Enum - Represent a list of related constants
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
// changing the first value
var Direction2;
(function (Direction2) {
    Direction2[Direction2["Up"] = 1] = "Up";
    Direction2[Direction2["Down"] = 2] = "Down";
    Direction2[Direction2["Left"] = 3] = "Left";
    Direction2[Direction2["Right"] = 4] = "Right";
})(Direction2 || (Direction2 = {}));
// Assigning strings as values
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "UP";
    Direction3["Down"] = "DOWN";
    Direction3["Left"] = "LEFT";
    Direction3["Right"] = "RIGHT";
})(Direction3 || (Direction3 = {}));
const mySize = 11 /* Size.Large */;
// console.log(mySize);
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
function calculateTax(income, taxYear) {
    // in this case taxYear is optional
    return (taxYear || 2022) < 2022 ? income * 1.2 : income * 1.3;
}
// a better approach is setting a default value. TypeScript will infer the type from the value
function calculateTax2(income, taxYear = 2022) {
    return taxYear < 2022 ? income * 1.2 : income * 1.3;
}
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
let textBox = {
    drag: () => { },
    resizable: () => { },
};
let quantity;
// Nullable Types - null or undefined
const greet = (name) => void console.log(name ? name.toUpperCase() : "Hola");
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
const customer = getCustomer(0);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear()); // only execute if the customer and the birthday is not null or undefined, otherwise return undefined.
// Optional Element Access Operator - in arrays
// customers?.[0]
// Optional call operator
const foo = null;
foo === null || foo === void 0 ? void 0 : foo("a"); // Only execute if foo is referencing an actual function
