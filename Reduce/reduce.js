/*
Array.reduce()- It accepts a callback function and initial value as an input
(initial value is optional). The function will be called for each element
of the array with the initial value at the beginning and then with the
value returned from the last call of the same function.

The callback function has 4 parameters, ( previousValue , currentValue ,
currentIndex , array ).
● previousValue – The value returned from the last call of the
same function or the initial value at the beginning.
● currentValue – Current value of the array.
● currentIndex – Current index position of the iteration.
● array – The array itself.

Using this method we can perform different types of operations.

Gemini vr => To execute a reducer function (that you provide) on each element of the array, resulting in a single output value. It iterates through the array and accumulates a single result.
---------

2.What is the optional second argument passed to reduce() and why is it important?

Expected Answer: The optional second argument is the initial value for the accumulator. It's important because:

If provided, the accumulation starts with this value and the first element is the currentValue.

If not provided, the first element of the array is used as the initial accumulator value, and iteration starts from the second element.
 */

// Fin sum
const arr = [4,5,13,8,19,20];

function findSum(arr){

    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

console.log(findSum(arr));

//Reduce
const output = arr.reduce(((acc,cur) => acc = cur + acc),0)

console.log("From Reduce",output);


// Fin Max
const arr2 = [1,2,13,6,19,20,30];

function findMax(arr2){
    let max =0 ;
    for(let i = 0; i<arr2.length; i++){
        if(arr2[i] > max){
            max = arr2[i]
        }
    }
     return max;
}

console.log(findMax(arr2))

const output2 = arr2.reduce(((acc,cur) => cur> acc ? acc = cur : acc),0);

console.log("From Reduce 2",output2)


//Reduce - {26: 2, 50: 1, 75: 1}
const users = [
    {firstName: 'Akshay', lastName: 'saini',age: 26},
    {firstName: 'donald',lastName: 'trumph',age: 75},
    {firstName: 'elon', lastName: 'musk',age: 50},
    {firstName: 'deepika',lastName: 'padukone',age: 26},
  ];

const output3 = users.reduce(function(acc,cur){
    if(acc[cur.age]){
        acc[cur.age] = ++acc[cur.age]
    }
    else{
        acc[cur.age] = 1
    }
    return acc;
},{})

console.log(output3)


const output4 = users.filter((x) => x.age < 30).map((x) => x.firstName)

console.log(output4)

const output5 = users.reduce((acc,cur) => {
    if(cur.age < 30){
        acc.push(cur.firstName)
    }
    return acc;
},[])

console.log(output5)


// How can you use reduce() to flatten an array of arrays (e.g., [[1, 2], [3, 4]] to [1, 2, 3, 4])?

const nested = [[1, 2], [3, 4]];

//Method 1: concat
const flat = nested.reduce((acc,cur) => acc.concat(cur) , []);
console.log(flat);

const flat2 = nested.reduce((acc,cur) => [...acc,...cur],[])
console.log(flat2)

