/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let arr=[]
    let x=nums.sort((x,y)=>x-y)
    for(i=0;i<nums.length;i++){
        if(x[i]==target){
            arr.push(i)
        }
    }
    return arr
};