// v1
/**
 * In this code there are some problems
 * the original x was changed to a local variable 
 * we want handle using a math.floor for division of n
 * And also less than 0 will not consider as a palindrome bc id '-121' is reversed it will be '121-' which is not a palindrome 
 **/ 
function isPalindrome() {
let x= 121

    let rev = 0;

    while (x > 0) {
        let rem = x % 10
        rev = rev * 10 + rem;
        x = x / 10
    }

    console.log(rev,x)

    if(rev === x) {
        return true
    } else {
        return false
    }
}


// V2

function isPalindrome() {


    let x = 121
    // Here by making a copy of x it will not change the original value of x and we can use it for comparison later
    let Xcopy = x

    // because negative numbers are not considered palindromes, we can return false if x is less than 0
    if (x < 0) {
        return false
    }

    let rev = 0;

    while (x > 0) {
        let rem = x % 10
        rev = rev * 10 + rem;
        // We need to use Math.floor to get the integer part of the division
        x = Math.floor(x / 10)
    }

    if(rev === Xcopy) {
        return true
    } else {
        return false
    }

    // return rev === Xcopy

}