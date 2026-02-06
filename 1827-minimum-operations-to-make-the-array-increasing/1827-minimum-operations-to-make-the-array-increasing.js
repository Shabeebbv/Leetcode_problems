/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let count=0
    for(i=1;i<nums.length;i++){
        while(nums[i-1]>=nums[i]){
            nums[i]++
            count++
        }
    }
    return count
};