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

