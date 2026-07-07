
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

// ### Question 5 -What logs to console of the following code snippet?


