
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