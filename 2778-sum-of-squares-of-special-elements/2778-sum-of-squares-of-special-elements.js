/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    let n=nums.length
    let arr=[]
    for(i=0;i<nums.length;i++){
        if(n%(i+1)==0){
            arr.push(nums[i]*nums[i])
        }
    }
   return arr.reduce((acc,curr)=>acc+curr,0)
};