
// Ques -1 What is logged?

const user = {
  firstName: 'Piyush!',
  getName() {
    const firstName = 'Jen!';
    return this.firstName;
  }
};
// Bcz this points to the object that is calling the method, which is user. The getName method uses this to access the firstName property of the user object.

console.log(user.getName()); // Piyush  

// Ques -2 What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

// The result of accessing `user.ref.name` will be `undefined`.Bcz the `ref` property is assigned the value of `this` at the time of the function call. In this case, `this` refers to the global object (window in browsers, global in Node.js) because `makeUser` is called in the global context. The global object does not have a `name` property, so `user.ref.name` is `undefined`.

alert( user.ref.name );

// Fix for q-2

function makeUser2() {
  return {
    name: "John",
    ref() {
      return this;

    }
}
}

let user2 = makeUser2();

// Here now we are wrapping the `ref` property in a method, so when we call `user.ref()`, `this` will refer to the object that is calling the method, which is `user2`. Therefore, `user.ref().name` will correctly return "John".

alert( user2.ref().name ); // John


// ques -3 
const user = { 
    name: 'Piyush Agarwal!', 
    logMessage() { console.log(this.name); // What is logged? 
    } }; 
    
setTimeout(user.logMessage, 1000);

/**
 * After a delay of 1 second, `undefined` is logged to console. 

While `setTimeout()` function uses the `object.logMessage` as a callback, still, it invokes `object.logMessage` as a regular function, rather than a method.

And during a regular function invocation *this* equals the global object which is `window` in the case of the browser environment.

That's why `console.log(this.message)` inside `logMessage` method logs `window.message`, which is `undefined`.

How can you fix this code so that 'Piyush Agarwal!' is logged to console? 
Write your solution in a comment below!

 * */ 

// to fix this we want to wrap the setTimeout call in an function that calls the logMessage method on the user object, like this:
setTimeout(function() {
  user.logMessage();
}, 1000); 


// ### Question 4 -What logs to console of the following code snippet?


const user = { 
    name: 'Piyush', 
    greet() { return `Hello, ${this.name}!`}, 
    farewell: () => { return `Goodbye, ${this.name}!`
} 
}; 

console.log(user.greet()); // What is logged? console.log(user.farewell()); // What is logged?

/**

'Hello, Piyush!' and 'Goodbye, undefined!' are logged to console.

When calling `object.greet()`, inside the method `greet()` `this` value equals `object`because `greet` is a regular function. Thus `object.greet()` returns `'Hello,Piyush!'`.

But `farewell()` is an arrow function, so *[this* value inside of an arrow function]*always* equals `this` of the outer scope.

The outer scope of `farewell()` is the global scope, where `this` is the global object. Thus `object.farewell()` actually returns `'Goodbye, ${window.name}!'`, which evaluates to `'Goodbye, undefined!'`.
 
*/ 


//  Question 5

/*
Create an object `calculator` with three methods:

- `read()` prompts for two values and saves them as object properties with names `a` and `b` respectively.
- `sum()` returns the sum of saved values.
- `mul()` multiplies saved values and returns the result.

Example :
*/


let calculator = {
  read() {
    this.a = +prompt('Enter the first number:', 0);
    this.b = +prompt('Enter the second number:', 0);
  },
    sum() {
    return this.a + this.b;
  },
    mul() {
    return this.a * this.b;
  },
    div() {
    return this.a / this.b;
  },
  sub() {
    return this.a - this.b;
  }
}

calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
alert( "Div=" + calculator.div() );
alert( "Sub=" + calculator.sub() ); 


// ### Question 6

var length = 4; 

function callback() { console.log(this.length);} // What is logged? 

    const object = { 
        length: 5, 
        method(callback) { 
            callback(); 
        } 
    }; 
    
object.method(callback); 

/*

`4` is logged to console.

`callback()` is called using regular function invocation inside `method()`. Since this value during a regular function invocation equals the global object, `this.length` is evaluated as `window.length` inside `callback()` function.

The first statement `var length = 4`, being in the outermost scope, creates a property `length` on the global object: `window.length` becomes `4`.

Finally, inside the `callback()` function `this.length` evaluates as `window.length` — `4` being logged to console.

*/ 


// ### Question 7 -What is the output of the following code ?

var length = 8; 
function callback() { 
    console.log(this.length);// What is logged? 
    } 
    
const object = { 
    length: 5, 
    method() { 
        arguments[0]() 
    } 
}; 

object.method(callback, 1, 2);


/*

`3` is logged to console. 

`obj.method(callback, 1, 2)` is invoked with 3 arguments: `callback`, `1` and `2`. 
- As result the `arguments` special variable inside `method()` is an array-like object of the following structure:
{ 0: callback, 1: 1, 2: 2, length: 3 }

*/ 


// ### Question-9 Write the implementation of this calc()



