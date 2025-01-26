// Basic Types
const id: number = 5;
const firstName: string = "Patrick";
const male: boolean = true;
let x: any = "Hello";
x = true;

// Array
const names: string[] = ["Patrick", "John", "Doe"];
const numbers: number[] = [1, 2, 3];

const list: any[] = [1, true, "free"];

// Tuple - Specify the type of every element in the list in the order that they appear
// Ideal for key-value pairs
const person: [number, string] = [2, "Patrick"];
// person.push('j')
// console.log(person)

// An array of tuples
const employee: [number, string][] = [
	[1, "Patrick"],
	[2, "John"],
];
// employee.push

// Union - |
let userId: string | number;
userId = "U-24";
userId = 24;

// Enum - Represent a list of related constants
enum Direction1 {
	Up, // 0
	Down, // 1
	Left, // 2
	Right, // 3
}

// changing the first value
enum Direction2 {
	Up = 1, // Setting this to a certain number  changes the other values
	Down, // 2
	Left, // 3
	Right, // 4
}

// Assigning strings as values
enum Direction3 {
	Up = "UP",
	Down = "DOWN",
	Left = "LEFT",
	Right = "RIGHT",
}

// Using const for enums will result in the compiler generating a more optimized code.
const enum Size {
	Small,
	Medium = 10,
	Large,
}
const mySize: Size = Size.Large;
// console.log(mySize);

// Object
const user1: { id: number; firstName: string } = {
	id: 1,
	firstName: "Patrick",
};

// Type Alias (custom type)
type User = {
	id: number;
	name: string;
};

const user2: User = {
	id: 2,
	name: "John",
};

// Type Assertion
let cid: any = 1;
// An instance where you want the cid to only be a certain type
let customerId = cid as number; // or <number>cid
customerId = 12;

// Functions
function addNumber(x: number, y: number): number {
	return x + y;
}
// addNumber(2, "4");

// functions with no return value
const log = (message: string | number): void => console.log(message);

// Interface
// preferred over type aliases for objects
interface UserInterface {
	id: number;
	name: string;
}

const user3: UserInterface = {
	id: 3,
	name: "Jane",
};

// Optional values
interface Agent {
	id: number;
	fullName: string;
	username?: string; // Optional value
}

function calculateTax(income: number, taxYear?: number): number {
	// in this case taxYear is optional
	return (taxYear || 2022) < 2022 ? income * 1.2 : income * 1.3;
}

// a better approach is setting a default value. TypeScript will infer the type from the value
function calculateTax2(income: number, taxYear = 2022): number {
	return taxYear < 2022 ? income * 1.2 : income * 1.3;
}

const agent1: Agent = {
	id: 1,
	fullName: "Agent Smith",
};

// Read-only values
interface UserInterface2 {
	readonly id: number; // once initialized, it cannot be reassigned
	name: string;
}

const randomUser: UserInterface2 = {
	id: 4,
	name: "Anonymous",
};
// randomUser.id = 5

// Interfaces with Functions
interface MathFunc {
	(x: number, y: number): number;
}

const add: MathFunc = (x, y) => x + y;
const sub: MathFunc = (x, y) => x - y;

// Classes
class Person {
	id: number;
	name: string;

	constructor(id: number, name: string) {
		this.id = id;
		this.name = name;
	}

	register(): string {
		return `${this.name} is now Registered`;
	}
}

// Interfaces with Classes
interface PersonInterface {
	id: number;
	name: string;
	register(): string; // Interface method
}

class Person2 implements PersonInterface {
	id;
	name;

	constructor(id: number, name: string) {
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
	position: string;
	constructor(id: number, name: string, position: string) {
		super(id, name);
		this.position = position;
	}
}

const emp = new Employee(3, "John", "Developer");
// console.log(emp.register());

// Generics - Used to build reusable components
function getArray<T>(items: T[]): T[] {
	return [...items];
}

let numArray = getArray<number>([1, 2, 3, 4]); // array of numbers
let strArray = getArray<string>(["brad", "john", "joe"]); // array of strings

numArray.push(3);
// strArray.push(3); // error

// Intersection - &
type Draggable = {
	drag: () => void;
};

type Resizable = {
	resizable: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
	drag: () => {},
	resizable: () => {},
};

// Literal Types - for limiting the values we can assign to a variable
type Quantity = 50 | 100;
let quantity: Quantity;
// quantity = 52; // error

type Metric = "cm" | "inch";

// Nullable Types - null or undefined
const greet = (name: string | null | undefined) :void =>
	console.log(name ? name.toUpperCase() : "Hola");

greet(undefined);

// Optional Chaining - ?
type Customer = {
	birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
	return id === 0 ? null : { birthday: new Date() };
}

const customer = getCustomer(0);
console.log(customer?.birthday?.getFullYear()); // only execute if the customer and the birthday is not null or undefined, otherwise return undefined.

// Optional Element Access Operator - in arrays
// customers?.[0]

// Optional call operator
const foo: any = null;
foo?.("a"); // Only execute if foo is referencing an actual function
