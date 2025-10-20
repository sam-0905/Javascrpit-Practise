// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment)


// Example 1
function x(){
 var a = 20;
 function y(){
    console.log("Example 1",a);
 }
 y();
}
x(); // 20

// Example 2
function x(){
 var a = 20;
 function y(){
    console.log("Example 2",a);
 }
 return y; 
}

var z = x();
console.log(z);// It will return the whole function

z();//a


// Example 3
function x(){
 var a = 20;
 function y(){
    console.log("Example 3",a); // 100
 }
 a = 100;
 return y; 
}

var z = x();
console.log(z);// It will return the whole function

z();//a


// Example 4  - nested function inside another funcn , +func

function l(){
var b = 380;
  function x(){
    var a = 80;
    function y(){
    console.log("Example 4",a,b); // 100
 }
  y(); 
}
 x();
}

l();


// Example 5

function a(){
 var a = 20;
 function b(){
    console.log("Example 1",a);
 }
 return b;
}

a()(); // We are calling the display name here itself.  


// Example 6

function c(){
 var a = 20;
 function d(num){
    console.log("Example 1",a ,num);
 }
 return d;
}

c()(5); // We can also pass argument while calling.


// Example 7 
// Write a function that allow you to do this (it is also reuseable)
function createBase2(a){
    return function (b){
      console.log(a + b)
    }
}

var addSix = createBase2(6)
addSix(10) 

// Example 8
// Time optimization

// V1- It take more time

function find(index){

   let a = []

   for(let i = 0; i<100000 ; i++){
      a[i] = i*i
   }
   console.log(a[index])
}

console.time("6")
find(6)
console.timeEnd("6")


console.time("12")
find(12)
console.timeEnd("12")

// v2 - by rapping in this it will solve or minimize timings

function find(index){

   let a = []

   for(let i = 0; i<100000 ; i++){
      a[i] = i*i
   }

   return function(){
         console.log(a[index])

   }
}

//to call this

const closure = find()

console.time("6")
closure(6)
console.timeEnd("6")


console.time("12")
closure(12)
console.timeEnd("12")

//example 9 

function a(){
   for(var i=0; i<3; i++){
      setTimeout(() => {
        console.log(i)
      }, i*1000);
   }
}

a()