/**
 * @param {number[]} nums
 * @return {number[]}
 */
var transformArray = function(nums) {
let arr=[]  
for(i=0;i<nums.length;i++){
    if(nums[i]%2==0){
        arr.push(0)
    }
    else{
        arr.push(1)
    }
}
return arr.sort()
};