/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
   
    let ans=[]
    for (i=0;i<nums.length;i++){
        if(i<n){
        ans.push(nums[i])
        ans.push(nums[i+n])}
    }
    return ans
    
};
console.log(shuffle([2,5,1,3,4,7], n = 3));
