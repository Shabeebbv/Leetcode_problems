/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let num=0
    for(i=0;i<nums.length;i++){
        if(nums[i]<k){
            num++
        }
    }
    return num
};
