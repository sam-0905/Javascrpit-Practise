// Example 1 => multiply by any number like pass as an argument it should multiply the whole array.
let arr = [3,2,6,2,1,1,4,4]

function multiplyByN(nums,n){
  return nums.map((num) => num * n)
}
console.log("From example 1",multiplyByN(arr,2))
let arr3 = [20,40,60,80];

//NOTE: For of loop is recommended for arrays
// For in loop is recommended for objects
for(const num of arr3){
// console.log("i", num, "element", arr3[num])
// return num*N
}

// Example 2
function multiplyByN2(arr,num){
    let newArr = [];
    console.log("new",newArr)
    // console.log(arr,num)
 for(let i=0; i<arr.length; i++){
    // newArr.push(arr[i] * num)
     newArr = [...newArr,arr[i] *num]
 }
 return newArr;
}

console.log("From example 2",multiplyByN2(arr,2))

// Example3
function sumOfArray(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
     sum = arr[i] + sum
    }
    return sum;
}

console.log("From example 3", sumOfArray(arr))

// Example 4

const sumRed = (acc,cur) => {
    acc = cur + acc;
    return acc;
}

const ReduFun = arr.reduce(sumRed);

console.log("From example 4 ", ReduFun);


// Example 5

function PrintEvenNum(arr){
let newArr = [];
for(i=0; i<arr.length; i++){
    if(arr[i] % 2 === 0){
        newArr.push(arr[i])
    }
}
 return newArr;
}

console.log("From example 5 ",PrintEvenNum(arr))

function PrintEvenNum(arr){
let newArr = [];
console.log('Original arr', arr);
for(i=0; i<arr.length; i++){
    if(arr[i] % 2 === 0){
        newArr= [...newArr, arr[i]]
    }
}
 return newArr;
}

console.log("From example 5 ",PrintEvenNum(arr))


// Example 6

function ReverseArr(arr){
    let newArr = []
    console.log('Original', arr);
    for(let i = arr.length -1; i>=0; i--) {
       newArr.push(arr[i])
    }
  return newArr;
}

console.log("From example 6 ", ReverseArr(arr))

console.log("Appu")

// For Arrays, you can also use for in loop
// const arr2 = [100, 200, 300, 400];

// for(const num in arr2) {
//     console.log('Index', num, 'elem', arr2);
// }

const userObj = {
    name: "Appu",
    age: 24,
    location: 'Trichy'
}

function logTheKeysOfAnObj(obj) {
    for(const key in obj) {
        console.log('Key', key, 'value', obj[key])
    }
}

logTheKeysOfAnObj(userObj)