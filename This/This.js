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



