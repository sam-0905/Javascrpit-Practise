// Time Complexity: O(n)
// space Complexity: O(1)


function missingNumber(nums) {
    let n = nums.length; 
    let totalSum = n * (n+1) /2 // calculate total arr sum 
    let sum = 0
    for(let i=0; i<n; i++){
        // Total the actual given arr 
        sum = sum + nums[i]
        // sum += nums[i]
    }

    return totalSum - sum
}