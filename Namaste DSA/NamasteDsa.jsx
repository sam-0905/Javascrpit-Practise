// Sum
function add(a,b){
 return a+b;
}

add(5,10);



/*
# Q-1
# Write a function that searches for a specific element in an array and returns its index. If the element is not found, return -1.
**/ 

let arr = [1,2,3,4,5,6,7,8,9];

function checkIndex(arr, element){
   for(let i = 0; i< arr.length; i++){
    if(arr[i] === element){
        return i;
    } 
    }
    return -1;
}




// Solution 2
function checkIndex2(arr,element){
 return arr.indexOf(element);
}
