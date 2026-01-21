/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let srt=nums.sort((x,y)=>x-y)
    let num=0
    for(i=0;i<srt.length;i++){
        console.log(srt[i]);
        
        if(srt[i]<k){
            num++
        }
    }
    return num
};
