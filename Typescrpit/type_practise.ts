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