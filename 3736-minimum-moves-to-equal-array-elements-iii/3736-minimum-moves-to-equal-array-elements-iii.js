/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let max=Math.max(...nums)
    let count=0
    for(i=0;i<nums.length;i++){
        while(nums[i]<max){            
            nums[i]++
            count++
        }
    }
    return count
};