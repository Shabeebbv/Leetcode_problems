/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    let arr=[...nums]
    x=k
    while(k>0){
        min=Math.min(...arr)
        let y=arr.indexOf(min)
        arr[y]=min*multiplier
        k--
    }
    return arr
};
console.log(getFinalState([2,1,3,5,6], 5, 2));
