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
