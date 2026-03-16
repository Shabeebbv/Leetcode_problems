/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var absDifference = function(nums, k) {
    let srt=[...nums].sort((x,y)=>x-y)
    let srt1=[...nums].sort((x,y)=>y-x)
    let sum1=0
    let sum2=0
    for(let i=0;i<k;i++){
        sum1+=srt[i]
        sum2+=srt1[i]
    }
   return Math.abs(sum1-sum2)
};