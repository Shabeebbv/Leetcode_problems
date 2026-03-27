/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let ans=0
    let min=Math.min(...nums)
    let max=Math.max(...nums)
    for(i=1;i<=max;i++){
        if(min%i==0&&max%i==0){
            ans=i
        }
    }
    return ans
};
console.log(findGCD([2,5,6,9,10]));
