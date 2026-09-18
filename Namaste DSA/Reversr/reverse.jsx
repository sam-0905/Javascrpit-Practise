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

// V2 handle corner case 
//Write a function reverse(x) that takes a 32-bit signed integer and returns its digits reversed. If the reversed value overflows the 32-bit signed integer range [-2^31 , 2^31-1], return 0.



function rev(n){

    let nCopy = n
    // Here we handle a case
    n = Math.abs(n)

    let rev = 0

    while(n > 0){
        let rem = n %10
        rev = rev * 10 + rem
        // Here we handle a case
        n = Math.floor(n /10)
    
         // Here we handle a case

         let limit  = Math.pow(2,31)
        //  let limit = 2**31 - denotes 2 power 31
         if(rev <-limit || rev>limit) return 0

        return (nCopy < 0 ) ? -rev : rev
    }
}