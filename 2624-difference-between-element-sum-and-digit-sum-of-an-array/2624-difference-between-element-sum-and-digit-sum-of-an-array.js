/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    sum1=0
    sum2=0
    let arr=nums.join('').split('').map(Number)
    for(i=0;i<nums.length;i++){
        sum1+=nums[i]        
    }
    for(i=0;i<arr.length;i++){
        sum2+=arr[i]
    }
    return sum1-sum2    
};
console.log(differenceOfSum([1,15,6,3]));