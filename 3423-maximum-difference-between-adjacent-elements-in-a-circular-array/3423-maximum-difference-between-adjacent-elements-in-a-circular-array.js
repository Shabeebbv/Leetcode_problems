/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
    let n=nums.length
    let res=Math.abs(nums[0]-nums[n-1])
    for(let i=0;i<nums.length;i++){
        if(Math.abs(nums[i]-nums[i+1])>res){
            res=Math.abs(nums[i]-nums[i+1])
        }
    }
    return res
};
console.log(maxAdjacentDistance([1,2,4]));
