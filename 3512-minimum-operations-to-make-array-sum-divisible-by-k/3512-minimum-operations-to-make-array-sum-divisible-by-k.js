/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let sum=0
    for(i=0;i<nums.length;i++){
        sum+=nums[i]
    }
    if(sum%k==0){return 0}
    return sum%k
};
console.log(minOperations([3,9,7],5));
