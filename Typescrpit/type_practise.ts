// Primitives
var a : number = 10;
let username : string = "Allan"
let isAdmin : boolean = true

// Array

let num: number[] = [1,2,3,4,]
let fruits : String[] = ["Apple","orange","Grapes","Mango"] 

// Tuples - suppose we need to add both the types means

let data : [number,string] = [2,"Indian Bank"]

// Multiple numbers and multiple strings in a fixed order
let data1: [number, number, string, string] = [10, 20, "X", "Y"];
 
// REST - A single string followed by multiple numbers 
let values: [string, ...number[]] = ["Coordinates", 1, 2, 3, 4, 5];

// ------------------------------------------------------------------------

// enum 

enum Color{
    Red,
    Green,
    Blue
}
// It will only take any of these colors inside of it
let favColor : Color = Color.Blue


// Any (Avoid when possible)

let radomValue : any = 10;
radomValue = "Allan"
radomValue = true


// Unknown (Safer than any)
let userInput : unknown;
userInput = 5;
userInput = "text";


// Void (For functions that don't return)
function subscribe(message : string): void{
 console.log(message)
//   return "Hello There!" *It will throw Error!!*
}

function subscribe2(message : string): string{
 console.log(message)
 return "Hello There!"
}

// Null and undefined

let nullVal: null = null;
let undefinedVal : undefined = undefined;

// --------------------------------------------------------------------------
// Type inference

let inferredString = "Hello World"; // TypeScript infers the type as string
inferredString = "New String"; // Valid
// inferredString = 42; // Error: Type 'number' is not assignable to type 'string'  

// --------------------------------------------------------------------------
// function


//Basic function

function add(a:number,b:number) : number{
return a + b
}


// Optional Parameters
function greet(name: string, greetings :string):string{
    return `Hello ${name}`
}

function greet2(name: string, greetings?:string):string{
    if(greetings){
        return `${greetings} ,${name} ! `
    }
    return `Hello ${name}`
}

// Default parameters
function multiply(a: number, b: number = 1): number{
    return a * b;
} 

// REST parameters
function sum(...number :number[]) :number{
    return number.reduce((total,n) => total + n , 0)
}

// Arrow function 

const divide = (a:number , b: number):number => a/b

// Function types
let calculate : (x:number,y:number) => number;
calculate = add;   // It will take predefined function

//-------------------------------------------------------------------

// Object interface 

// Object type annotation without interface

let user : {name : string; age : number} = {
    name : "allan",
    age : 25,
}

// Interface
interface user1{
    name: string;
    age : number;
    email : string;
    // email?: string;   // Optional entry
    readonly id : number;  // Readonly entry

}

// Object type annotation

let userObj : user1 = {
    name : "allan",
    age : 25,
    email : "abcd@gmail.com",
    id : 1,
}


// Interface methods
interface Product{
    name: string;   
    price: number;
    getDiscountedPrice(discount: number): number;
}

let laptop : Product = {
    name: "Dell XPS 13",
    price: 1000,
    getDiscountedPrice(discount: number): number {
        return this.price - discount;
    }
}
// --------------

// Type alias

type Point = {
    x: number;
    y: number;
}

let point: Point = {
    x: 10,
    y: 20,
}

// Type alias for primitives

type ID = string | number;

let userId: ID = "abc123";
let productId: ID = 12345;


// ------------------------

//  Types vs Interfaces

/** Interfaces are generally used for defining the shape of objects, while types can be used for a wider range of type definitions, including primitives, unions, and intersections. 
 * Interfaces can be extended and implemented, while types cannot.*/ 

interface Animal {
    name : string;
    makeSound(): void;
}

interface Dog extends Animal {
    breed: string;
}

let myDog: Dog = {
    name: "Buddy",
    breed: "Golden Retriever", 
    makeSound() {
        console.log("Woof!");
    }
}

// Interface can be merged, while types cannot. This means that if you declare an interface with the same name multiple times, TypeScript will merge them into a single interface.

interface Person {
    name: string;
}   

interface Person {
    age: number;
}

let person: Person = {
    name: "Alice",
    age: 30,
}

// use interface for objects and types alias for union / intersection

interface Car {
    make: string;
    model: string;
}

type UserID = string | number;


// _________________________________

// Union types (OR)

type SomeValue = string | number | boolean;

// Intersection Types (And)

interface Address {
    number: number;
    street: string;
    city: string;
}


interface Contact {
    email: string;
    phone: string;
}

type UserDetails = Address & Contact; // Intersection type

let userDetails: UserDetails = {
    number: 123,
    street: "Main St",
    city: "New York",
    email: "xyz@gmail.com",
    phone: "123-456-7890"
}


// __________________

// Literal types

type Direction = "up" | "down" | "left" | "right";


// Numeric type

let diceRoll: 1 | 2 | 3 | 4 | 5 | 6;

// combining with other types
type GamePiece = Direction | "select" | "submit";

// ---

// type assertion and type guards

// Type assertion
let someValue: unknown = "Hello, TypeScript!";
let strLength: number = (someValue as string).length; // Here we can able access the string methods and properties because we asserted the type of `someValue` to be a string.
// or
let strLength2: number = (<string>someValue).length; // Here we can able access the string methods and properties because we asserted the type of `someValue` to be a string.

// Type guards
function isString(value: unknown): value is string {
    return typeof value === "string";
}

// instanceof type guard
class Animal {
    makeSound() {
        console.log("Animal sound");
    }
}

class Dog extends Animal {
    Bark() {
        console.log("Woof!");
    }

}

class Cat extends Animal {
    Meow() {
        console.log("Meow!");
    }     
}


function makeAnimalSound(animal: Animal) {
    if (animal instanceof Dog) {
        animal.Bark(); // TypeScript knows `animal` is a `Dog`
    } else if (animal instanceof Cat) {
        animal.Meow(); // TypeScript knows `animal` is a `Cat`
    } else {
        animal.makeSound(); // TypeScript knows `animal` is an `Animal`
    }
}


// ________________________

// class

class PersonClass {
    private name: string;
    protected age: number;  
    public email: string;

    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }


    // Public method
    public getName(): string {
        return this.name;
    }
    // Getters and Setters
    public getAge(): number {
        return this.age;
    }
    public setAge(age: number): void {
        if (age >= 0) {
            this.age = age;
        } else {
            throw new Error("Age cannot be negative");
        }
}

}


// ____________________

// Generic in Typescript

function identity<MyType>(arg: MyType): MyType {
    return arg;
}   
// by specifying the type parameter explicitly it will return the same type as the input argument.

let output1 = identity<string>("Hello"); // output1 is of type string
let output2 = identity<number>(42); // output2 is of type number



// Generic with array 

function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

//  If we don't use this <> it will return the type as any, but if we use this <> it will return the same type as the input argument.

let firstElement = getFirstElement(["a", "b", "c"]); // firstElement is of type string | undefined it pick automatically the type of the array elements

// To let TypeScript infer the type of the array elements, we can use the following syntax:
let firstString = getFirstElement<string>(["a", "b", "c"]); // firstString is of type string
let firstNumber = getFirstElement<number>([1, 2, 3]); // firstNumber is of type number


// Generic with interface

interface KeyValuePair<K, V> {
    key: K;
    value: V;
}

let pair: KeyValuePair<string, number> = {
    key: "age",
    value: 30
};


// Generic with class

class GenericClass<T> {
    private value: T;   

    constructor(value: T) {
        this.value = value;
    }

    public getValue(): T {
        return this.value;
    }

    private setValue(value: T): void {
        this.value = value;
    }
    genericMethod<U>(arg: U): U {
        return arg;
    }
}

