// removeDuplicates 

function removeDuplicates(arr){

    let x = 0;

    for(let i=0; i<arr.length; i++){
        if(arr[i] > arr[x]){
            x = x + 1 //x++
            arr[x] = arr[i] 
        }
    }
    return x + 1
}


// remove Element form an array


 function removeElement(arr,val){

    for(let i=0; i<arr.length; i++){
        // Shift elem to the left if it is not equal to val 
        if(arr[i] != val ){
            arr[x] = arr[i]
            x = x+1
        }
    }

    return x 

 }