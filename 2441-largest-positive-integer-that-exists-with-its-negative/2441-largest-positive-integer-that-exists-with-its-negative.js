/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    let srt=nums.sort((x,y)=>y-x)
    for(i=0;i<nums.length;i++){
        if(nums.includes(srt[i])&&nums.includes(-srt[i])){
            return srt[i]
        }
    }
    return -1
};