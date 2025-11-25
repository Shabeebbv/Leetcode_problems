/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    let count=0
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if(Math.abs(nums[i]-nums[j])==k){
                count++
            }
        }
    }
    return count
};
console.log(countKDifference([1,2,2,1],1));

