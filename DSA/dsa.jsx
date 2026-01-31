
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



// Problem 3 - Reverse string
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Array.reverse e.g.
const items = [1, 2, 3];
console.log(items); // Output: [1, 2, 3]

items.reverse();
console.log(items); // Output: [3, 2, 1]



// Approach 1 -
// 1 - my try
function revStr(str){
    for(let i=0 ;i<str.length-1; i++){
  let result = ""
  result.push(str);
return result;
}
}

// 1 - my try - fixed version

function revStr(str){

  let result = "";

  for(let i= str.length - 1; i >=0; i--){
    result = result + str[i] // result += str[i]
  }
  return result;
}

console.log(revStr("apple"))


// Approach 2 --
// V1
function reverseStr(str1){
  return str1.split().reverse().join("")
}
console.log(reverseStr("apple"))

// V2
function reverseStr2(str2){
  let result1 = ""

  for (let character of str2 ){
    result1 = character + result1 
  }
  return result1;
}
console.log(reverseStr2("orange"))

// V3
function reverse(str){
  return str.split("").reduce((rev,char)=> char + rev , "")
}



// Question - 4
// Palindromes
// Given a string, return true if the string is a palindrome
// or false if it is not. 

/*
Palindromes are strings that
form the same word if it is reversed. *Do* include spaces
and punctuation in determining if the string is a palindrome
*/  

// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// my version
function isPalindrome(str){
  if(  str.split("").reverse().join("") === str){
    return true
  }
  else  {
    return false
  }
}
isPalindrome("abba")


// my version - [Approach 2]

function isPalindrome2(str){
  const reversedStr = str.split("").reverse().join("")
  if(reversedStr === str){
    return true
  }
  return false
}

// my version - [Approach 2.1]

function isPalindrome3(str){
  const reversedStr2 = str.split("").reverse().join("")
  
  return str === reversedStr2
}

// my version - [Approach 3]

function isPalindrome4(str){
// Here we are going to use a array method for that we first want to convert a str to arr so we use split()

  return str.split("").every((char,i)=>{
  return  char === str[str.length - i - 1]
})

}


// Question - 5
// reverseInt

/*
Given an integer, return an integer that is the reverse
ordering of numbers.
--- Examples
  reverseInt(15) === 51
  reverseInt(981) === 189
-- We should take care of 00  and neagtive values -91
  reverseInt(500) === 5
  reverseInt(-15) === -51
  reverseInt(-90) === -9
*/ 

// my version 
function reverseInt(num){
    const reveredNum = num.toString().split("").reverse().join("")
    return parseInt(reveredNum);
}

//without parserInt - it returns as a string.Not a value
function reverseInt2(num){
    const reveredNum = num.toString().split("").reverse().join("")
    return reveredNum;
  }

/*
--- so for both the above method fails incase of negative values.For that we should also use.
 ParseInt() + Math.sign() method to solve.
**/
// Final solution 1:
function reverseInt3(num){
    const reveredNum = num.toString().split("").reverse().join("")
    if(num < 0 ){
      return parseInt(reveredNum) * -1;
    }
    return parseInt(reveredNum);
  }

// Final solution 2:

function reverseInt3(num){
    const reveredNum = num.toString().split("").reverse().join("")
      return parseInt(reveredNum) * Math.sign(num)
  }



// Question - 6
// MaxChar

/*
Given a string, return the character that is most
commonly used in the string.
--- Examples
maxChar("abcccccccd") === "c"
maxChar("apple 1231111") === "1"
**/ 

// Approach 1
const string = "Hello there!";
const chars = {};

for(let char of string){
  if(!chars[char]){
    chars[char] = 1
  }else{
    chars[char]++
  }
}

// Approach 1.1
const string1 = "Hello there!";
const chars2 = {};

for(let char of string){
  //  chars2[char] = chars2[char] + 1 - If we write like this it will not assign 1 instead null/nan.
  chars2[char] = chars2[char] + 1 || 1; //so we give OR 1 for safety. 
}

 