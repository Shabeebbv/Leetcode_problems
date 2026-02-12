/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    x=Math.max(...nums)
    let sum=x
    while(k>1){
        x++
        sum+=x
        k--
    }
    return sum
};
console.log(maximizeSum([5,5,5],2));
