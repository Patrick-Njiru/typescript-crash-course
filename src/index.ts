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
const person: [number, string, boolean] = [id, firstName, male];

// An array of tuples
const employee: [number, string][] = [
	[1, "Patrick"],
	[2, "John"],
];

// Union
let userId: string | number;
userId = "U-24";
userId = 24;

// Enum
enum Direction1 {
	// Each direction has a number value, usually starting from 0
	Up = 1, // The rest will increment by 1 from
	Down,
	Left,
	Right,
}

enum Direction2 {
	Up = "UP",
	Down = "DOWN",
	Left = "LEFT",
	Right = "RIGHT",
}

// Object
const user1: { id: number; firstName: string } = {
	id: 1,
	firstName: "Patrick",
};

// Creating a custom Type
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
// preferred over custom types for objects
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
