/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let count;
    let arr=[]
    for(i=0;i<nums.length;i+=2){
        count=nums[i]
        while (count>0){
            arr.push(nums[i+1])
            count--
        }
    }
    return arr
};
console.log(decompressRLElist([1,2,3,4]));
