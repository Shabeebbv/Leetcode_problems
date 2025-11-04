/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let even=nums.filter(x=>x.toString().length%2==0)
    return even.length
};
console.log(findNumbers([12,345,2,6,7896]));
