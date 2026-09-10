// v1

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