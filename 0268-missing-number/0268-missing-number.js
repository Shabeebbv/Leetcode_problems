/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let x=nums.sort((x,y)=>x-y)
    console.log(x);
    for(i=0;i<nums.length;i++){
        if(i!=x[i])
            return i
    }
        return nums.length

};
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));
