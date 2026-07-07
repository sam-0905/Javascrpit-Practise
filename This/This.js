// Implicit binding of `this` in a function expression invoked a function with . dot notation. The value of `this` is the object that the function is a property of.

const obj = {
  name: 'My Object',
  greet: function() {
    console.log(`Hello from ${this.name}`);
  }
};  

// Here this refers to the obj object, so the output will be "Hello from My Object"
const greetFunction = obj.greet;
greetFunction(); // Output: Hello from undefined


// explicit binding of `this` using the `call` method. The value of `this` is explicitly set to the object passed as the first argument to `call`.

const anotherObj = {
  name: 'Another Object'
};  

const greetFunctionWithCall = obj.greet;
greetFunctionWithCall.call(anotherObj); // Output: Hello from Another Object

// _______________________________________________________________

//This

// This is a special keyword in JavaScript that refers to the context in which a function is called. The value of `this` can change depending on how a function is invoked.

/**
 * 1. Inside a Method (Object Context) 
 * When a function is called as a method inside an object, this points directly to the object that owns the method.
 * 
 * */ 

const user = {
  name: "Arun",
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

user.greet(); // Output: "Hello, my name is Arun"
// Here, 'this' refers to the 'user' object.


// Here this point to the global object (window in browsers, global in Node.js) because the function is called in the global context. In strict mode, this will be undefined.

 this.a = 10;
function showThis() {
  console.log(this.a);
}

showThis(); // Output: 10


// Here this refers to the object that is calling the method, which is userName. The getName method uses this to access the name and age properties of the userName object.

let userName = {
    name: "Dinesh",
    age: 30,
    getName: function() {
        return this.name + " is " + this.age + " years old.";
    }
}

userName.getName(); // Output: "Dinesh is 30 years old."


// ____________________________________

// In the example below, the greet method is defined as an arrow function. Arrow functions do not have their own this context; instead, they inherit this from the surrounding lexical scope. In this case, the surrounding scope is the global context, so this refers to the global object (window in browsers, global in Node.js).

const employee = {
  name: 'Alice',
  age: 28,
  greet: () => {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const getEmployeeDetails = employee.greet;
getEmployeeDetails(); // Output: "Hello, my name is undefined and I am undefined years old."


// In the example below, the greet method is defined as a regular function. Regular functions have their own this context, which is determined by how the function is called. In this case, the greet method is called as a method of the person object, so this refers to the person object.

const person = {  
  name: 'John',
  age: 25,
  greet: function() {
    setTimeout(() => {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }, 1000);
}
}

const getPersonDetails = person.greet;
getPersonDetails(); // Output: "Hello, my name is John and I am 25 years old."


