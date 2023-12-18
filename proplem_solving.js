//solution for missing number 
var missingNumber = function(nums) {
    //take the lingth of the arr nums 
    const n = nums.length;
    //sum of valus in the arr nums 
    let sum = (n * (n + 1)) / 2;
    //for loop to found the missing number 
    for (let i = 0; i < n; i++) {
        //found the missing numper py opration sum  =  sum - nums[i]
        sum -= nums[i]; 
    }
    //return the answer 
    return sum;
};