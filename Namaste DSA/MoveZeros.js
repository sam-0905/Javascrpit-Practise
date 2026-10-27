// My version
var moveZeroes = function(nums) {
    let x = 0

    for(let i=0; i<nums.length; i++){
        if(nums[i] !== 0){
            nums[x] = nums[i]
            x++
        }
        }
    while(x<nums.length){
            nums[x] = 0
            x++
        }
    return nums

};

// Akshay solution


function movezeros(arr){
    let x = 0 

    for(let i=0; i<arr.length; i++){
        if(arr[i] !==0){
            arr[x] = arr[i] 
            x++
        }
    }

    for(let i=x; i<arr.length; i++){
        arr[i] = 0
    }
}