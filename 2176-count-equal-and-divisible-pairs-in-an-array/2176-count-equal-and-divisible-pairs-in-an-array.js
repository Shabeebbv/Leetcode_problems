/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function(nums, k) {
    let count=0
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[i]==nums[j]){
                let x=i*j
                if(x%k==0){
                    count++
                }
            }
        }
    }
    return count
};
console.log(countPairs(nums = [3,1,2,2,2,1,3], 2));
