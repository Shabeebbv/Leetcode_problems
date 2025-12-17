/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    let a=[]
    let min=Math.min(...nums)
    let max=Math.max(...nums)
    for(i=min;i<max;i++){
      if (! nums.includes(i)){
        a.push(i)
      }
    }
    return a
};
console.log(findMissingElements([1,4,2,5]));
