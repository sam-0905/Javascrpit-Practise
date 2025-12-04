// Fibonacci sequence  
const fibSeries = [0, 1, 1, 2, 3, 5, 8 ]


// Recusrive solution 

function fib(n){
    if(n < 2){
        return n;
    }
    return fib(n-1) + fib(n-2);
}

console.log(fib(3))

// ----------------------

/*
 Write a program that console logs the numbers
 from 1 to n. But for multiples of three print
 “fizz” instead of the number and for the multiples
 of five print “buzz”. For numbers which are multiples of both three and five print “fizzbuzz”. 
 */

// my first v1
 function fizzbuzzTest(n){
    if(n *3 ){
        return "fizz";
    }else if (n*5){
        return "buzz";
    }
    else if (n*3 && n*5) {
        return "fizzbuzz";
    }
    return n;
 }

 // my first v2 fix

  function fizzbuzzTest2(n){

    for( let i = 0; i++;){
        console.log("first")
         if(n % 3 === 0 ){
            return "fizz";
       }    else if (n % 5 === 0 ){
             return "buzz";
      } 
         else if (n % 3 === 0  && n % 5 === 0) {
        return "fizzbuzz";
    }
    
    }
    return n;
 }

// my first v3 fix

  function fizzbuzzTest3(n){

    for( let i = 1; i<=n; i++){

        console.log("first")
         if(i % 3 === 0  && n % 5 === 0){
            return "fizzbuzz";
       }    else if (i % 3 === 0){
             return "fizz";
      } 
         else if (i % 5 === 0 ) {
        return "buzz";
    }
    
    }
    return n;
 }


// my first v4 fix

  function fizzbuzz(n){

    for( let i = 1; i<=n; i++){

      if(i % 3 === 0 && i % 5 === 0){
            console.log("fizzbuzz");
       }    else if (i % 3 === 0){
            console.log("fizz")
      } 
         else if (i % 5 === 0 ) {
            console.log("buzz")
    }   else {
             console.log(i);
        }
    }
    return;
 }

console.log( fizzbuzz(10))

// 2️⃣ Using ternary operator (more compact)
function fizzbuzzTer(n) {
  for (let i = 1; i <= n; i++) {
    console.log(
      i % 15 === 0 ? "fizzbuzz" :
      i % 3 === 0 ? "fizz" :
      i % 5 === 0 ? "buzz" : i
    );
  }
}


// Ultra-Compact One-Liner
console.log(
  Array.from({ length: 15 }, (_, i) => i + 1)
    .map(i => (i % 3 === 0 ? "fizz" : "") + (i % 5 === 0 ? "buzz" : "") || i)
    .join("\n")
);