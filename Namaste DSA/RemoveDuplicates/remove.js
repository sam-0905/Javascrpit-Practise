
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