

// Brute Force Approach

function mergeArrays(arr1, arr2) {
    const mergedArray = arr1.concat(arr2);
    mergedArray.sort((a, b) => a - b);
    return mergedArray;

}


// Optimized Approach

function mergeArrays(arr1, n, arr2, m) {

    let p1= n-1;
    let p2= m-1;


    for(let i = n+m-1; i>=0; i--){
        if(p2<0) break;

        if(p1>=0 && arr1[p1] > arr2[p2]){
            arr1[i] = arr1[p1];
            p1--;
        }else{
            arr1[i] = arr2[p2];
            p2--;
        }
    }

}