
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