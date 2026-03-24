// Fibonacci sequence  

// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

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
  return str1.split("").reverse().join("")
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
  if(str.split("").reverse().join("") === str){
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
  if(str === reversedStr){
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
// Frequency Map (or Character Map)
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
// Character Map
const string1 = "Hello there!";
const chars2 = {};

for(let char of string){
  //  chars2[char] = chars2[char] + 1 - If we write like this it will not assign 1 instead null/nan.
  chars2[char] = chars2[char] + 1 || 1; //so we give OR 1 for safety. 
}

 
/* 1.a) MaxChar solution
  The Goal: Find the character that appears most frequently.
*/ 

function maxChar(str){
  const charMap = {};
  let max = 0;
  let maxChar ="";

  for(let char of str){
    charMap[char] = charMap[char] + 1 || 1
  }

  for(let char in charMap){
    if(charMap[char] > max){
      max = charMap[char]
      maxChar = char
    }
  }
 return maxChar;
}


/*
First Non-Repeating Character
The Goal: Find the first character that does not repeat anywhere else in the string.
*/ 

function firstNonRepeating(str){
  const charMap = {}

  for(let char of str){
    charMap[char] = charMap[char] + 1 || 1 
  }
  
  for(let char of str){
    if(charMap[char] = 1){
      return char
    }
  }

  return null
}

// Unique Characters
// The Goal: Determine if every character in the string appears only once.

function hasUniqueChars(str){

  const charSet = new Set();

  for(let char of str){
    if(charSet.has(char)) return false;
    else {
      charSet.add(char)
    }
    return true
  }

}

// Question - 7
// array and chunk

/*
--- Directions
Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size
--- Examples
chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

*/

// My try
function chunk(array,size){
  let newArr = []
  if(size){
    array.length % 2 
    return newArr.push(array)
  }else{
    array.length % 2 != 0
    return newArr.push(array)
  }
  return newArr;
}

// Solution 1

function chunk2(array,size){

  const chunked = []

  for(let ele of array){

    const last = chunked[chunked.length-1]

    if(!last || last.length === size){
      chunked.push([ele])
    }
    else{
    last.push(ele)
    }
  }
  return chunked;
}

// Solution 1.1

function chunk(array, size) {
  const result = [];

  for (let item of array) {
    // Look at the very last sub-array we created
    const lastChunk = result[result.length - 1];

    if (!lastChunk || lastChunk.length === size) {
      // If no chunk exists OR if the last one is full:
      // Start a new chunk with the current item
      result.push([item]);
    } else {
      // Otherwise, there's still room! Add it to the last chunk.
      lastChunk.push(item);
    }
  }

  return result;
}


// Final solution 

function chunk1(arr,size){

  const chunked = [];
  let index = 0;

  while(index < arr.length){
    chunked.push( arr.slice(index , index + size))
    index += size
  }
return chunked;
}


// Question - 8
// anagram


// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False



// Helper function 

function buildCharMap(str){
  const charMap = {}

  for(let char of str.replace(/[\W_]/g, '').toLowerCase()){
    charMap[char] = charMap[char] + 1 || 1
   }
   return charMap;
}


// Anagram 

function isAnagram(strA,strB){

  const aCharMap = buildCharMap(strA);
  const bCharMap = buildCharMap(strB);

  if(Object.keys(aCharMap).length != Object.keys(bCharMap).length) return false ;

  for(let char in aCharMap){
    if(aCharMap[char] != bCharMap[char]){
      return false
    }
  }
      return true;
}

// Anagram 8.2

function checkIfStrIsAnagram(strA,strB){
  console.log(strA)
  console.log(strB)
 return cleanStr(strA)  === cleanStr(strB)
 }

function cleanStr(str){
  const sortedStr =  str.replace(/[\W_]/g, '').toLowerCase().split("").sort().join('')
  return sortedStr;
  console.log(sortedStr)
}



// Question - 9


/* // --- Directions
Write a function that accepts a string.  The function should
capitalize the first letter of each word in the string then
return the capitalized string.
--- Examples
  capitalize('a short sentence') --> 'A Short Sentence'
  capitalize('a lazy fox') --> 'A Lazy Fox'
  capitalize('look, it is working!') --> 'Look, It Is Working!'***/ 

// My version

function capitalize(str) {
  
 const newSentence = []
 
const capitalizeLetter =  str[0].toUpperCase()

console.log("Form console",capitalizeLetter)
  
newSentence.push(capitalizeLetter + str.split("").slice(1).join(""))
 
  // console.log("From console", newSentence)
 
return newSentence;
}

capitalize('a short sentence')


// solution 1

function capitalize1(str){
  const words = [];

  for(let word of str.split(" ")){
    words.push(word[0].toUpperCase() + word.slice(1))
  }
  return words.join(" ")
} 

// Question - 10

// steps

/*
--- Directions
Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!
--- Examples
  steps(2)
      '# '
      '##'
  steps(3)
      '#  '
      '## '
      '###'
  steps(4)
      '#   '
      '##  '
      '### '
      '####'
*
 **/ 


// Solution 1

function steps(n){

  for(let row=0; row<n; row++){
    let stair = ""

  for(let column = 0 ; column<n; column++){
    if(column <= row){
      stair += "#"
    }else{
      stair += " "
    }
  }
  console.log(stair);
  }
}

// Solution 2

function recStep(n,row=0,stair=""){

if(n === row){
  return
}

// It is end of the row
if(n === stair.length){
  console.log(stair)
  // Here we again calling the func with row = 1 , stair =""
  return recStep(n, row + 1)
}

// Last base condition

if(stair.length <= row){
  stair += "#"
}else{
  stair += " "
}

return recStep(n,row,stair)

}

// Question - 11

// Pyramid


/**
--- Directions
Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left *and* right hand sides
--- Examples
  pyramid(1)
      '#'
  pyramid(2)
      ' # '
      '###'
  pyramid(3)
      '  #  '
      ' ### '
      '#####' 
*/ 


function pyramid(n){

const midpoint = Math.floor((2* n- 1) / 2)

for(let row = 0; row < n; row ++){
  let level = ""

for(let column = 0; column < 2 * n - 1; column++){
  if(midpoint - row <=column && midpoint + row >= column){
    level += "#"
  }
  else{
    level += " "
  }
}
console.log(level)
}

}

// Recrusive solution 

function recPyramid(n, row =0, level = "" ){

if(n === row){
  return;
}

if(level.length === 2*n-1){
  console.log(level)
  return recPyramid(n,row + 1)
}

const midPoint = Math.floor((2 * n - 1) / 2)
let add;

if(midPoint -row <= level.length && midPoint + row >= level.length){
  add = "#"
}else{
  add = " "
}

 recPyramid(n,row,level+add)

}

recPyramid(3)



// Question - 12

// Vowels

/*
--- Directions
Write a function that returns the number of vowels
used in a string.  Vowels are the characters 'a', 'e'
'i', 'o', and 'u'.
--- Examples
  vowels('Hi There!') --> 3
  vowels('Why do you ask?') --> 4
  vowels('Why?') --> 0
*/ 

// Solution 1
function vowels(str){

  let count = 0;
  const checker = "aeiou" 
  // --- includes() also works in array
  // const checkerArr = ["a","e","i","o","u"]

  for(let char of str.toLowerCase()){
    if(checker.includes(char)){
      count++
    }
  }
  return count
}


// Soluiton 2 

function matchVowels(str){

  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0
}