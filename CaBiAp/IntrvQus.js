//Question 1:Output
const Person = {name :"Allan"}

function sayHi(age){
    return `${this.name} , ${age}`
}

console.log(sayHi.call(Person ,24)) // Allan , 24
console.log(sayHi.bind(Person ,24)) //It will return a whole function.

//Question 2:Output
const age = 25; // This is used to confuse

var person ={
    name:"Allan",
    age:24,
    getAge(){
        return this.age
    }
}
var person2 = {age :28}

console.log(person.getAge()) //24
console.log(person.getAge.call(person2)) // 28
console.log(person.getAge.apply(person2)) // 28


//Question 3:Output

var status = "😎"; 

setTimeout(()=>{

const status = "😍" // this will to confuse

var data = {
    status:"🥑",
    getStatus(){
    return this.status
        }
    }

},0)

console.log(data.getStatus()) // 🥑
console.log(data.getStatus.call(this)) // 😎 // Here bcz this refers to the global object and setTimeout is executed in the global context


//Question : 4 - call printAnimals such that it Prints all animals in object

const animals = [
{species:"Lion", name:"king"},
{species:"Whale", name:"Queen"}

]

function printAnimals(i){
    this.print = function(){
        console.log(" # " + i + " " + this.species + ": " + this.name)
    }
    this.print()
}

 printAnimals.call(animals) //Here we can not use call method because it will only print the first object in the array. So we need to use for loop to print all the objects in the array.


//For this we create a for loop
for(let i = 0; i<animals.length; i++){
    printAnimals.call(animals[i] ,i)
}


//Question : 5 - Append an array to another array 
// concatenating two arrays using apply method

const array = ["a","b","c"];

const elements = [1,2,3]

array.push.apply(array,elements)
console.log(array) //(6) ['a', 'b', 'c', 1, 2, 3]



//Question : 6 - Using apply this enhance built-in functions.
//Find min/max number in an array.
const numbers = [1,2,3,4,5]

console.log(Math.max(numbers)) // Here it will return NaN because Math.max() expects a list of numbers, not an array. So we need to use apply method to pass the array as individual arguments.


// Here we don't need object to bind the this keyword because Math.max() is a static method and does not rely on any object context. So we can pass null as the first argument to apply method.
console.log(Math.max.apply(null,numbers)) // 5
console.log(Math.min.apply(null,numbers)) // 1



// //Question : 10 - Bound function
function f (){
    console.log(this)// window object
}
let user = {
g: f.bind(null),
}
user.g()


//Question 11: Bind chain
function f(){
    console.log(this.name);
}
//we cannot change value of an object using chaining.Once we done it will take that value.If we use with bind we cannot bound with that.

// The second bind will not change the value of this because the first bind has already set the value of this to {name: "john"}. The second bind will be ignored and the value of this will remain {name: "john"}.
f = f.bind({name : "john"}.bind({name:"Xavier"}))
f(); // john



// Explicit binding with Arrow function

const age = 25; // This is used to confuse

const person = {   
    name: "Allan",
    age: 24,
    getAge: function() {
        const innerArrowFunction = () => {
            console.log(`Hello, ${this.name}!, Your age is ${this.age}.`);
        };
 }
}

const person2 = { age: 28 };

person.getAge.call(person2); // Hello, Allan!, Your age is 28.