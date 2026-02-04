/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let ans=[]
    for(i=0;i<nums.length;i++){
        let x=nums[i]
        ans[i]=nums[x]
    }
    return ans
};