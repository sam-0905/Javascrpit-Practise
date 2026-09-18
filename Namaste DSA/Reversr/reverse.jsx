// V1
function checkReverse(n){

    let nCopy = n
    x = Math.abs(n)
    let rev = 0

    while(n > 0){
     
    let rem = n % 10
    rev = 10 * rev + rem
    n = Math.floor(n/10)
    
    }
    
    if(X > 0){
        return rev
    }else{
        return -rev
    }

// return (nCopy < 0) ? -rev : rev
}