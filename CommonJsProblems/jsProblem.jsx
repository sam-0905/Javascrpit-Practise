
/*
Create a function in JavaScript that accepts a function as input and a count and executes that input function once for a given count of calls. 

-- This concept is known as a higher-order function, which is a function that takes another function as an  argument or returns a function as a result. 


-- and it also a closure, which is a function that has access to variables from its outer scope even after the outer function has finished executing.
**/ 
// my try

function samp(fn,count){
    let callCount = 0;

    return function(...args){
        if(callCount < count){
            callCount++;
            return fn(...args);
        }
    }
    
}
const sampleFunction = (fn) => samp(fn, 3);

// final code:
function samp(fn, count) {
    let callCount = 0;
    let lastResult; // Store the result to return after the limit is hit

    return function(...args) {
        if (callCount < count) {
            callCount++;
            lastResult = fn.apply(this, args); // Use apply to preserve 'this' context
        }
        return lastResult; 
    };
}

// Your helper function
const sampleFunction = (fn) => samp(fn, 3);