/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let arr=[]
    for(i=0;i<nums.length;i++){
        arr.push(nums[i]*nums[i])
    }
    return arr.sort((x,y)=>x-y)
};
console.log(sortedSquares([-4,-1,0,3,10]));
