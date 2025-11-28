/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    l=nums.sort((a,b)=>a-b)
    let result=0
    for(i=0;i<nums.length;i++){
        result=l.at(-2)*l.at(-1)-l.at(0)*l.at(1)
    }
    return result
};
console.log(maxProductDifference([4,2,5,9,7,4,8]));