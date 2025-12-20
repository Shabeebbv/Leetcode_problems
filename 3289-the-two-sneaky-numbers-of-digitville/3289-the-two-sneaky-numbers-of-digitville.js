/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let arr=[]
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if(nums[i]==nums[j]){
                arr.push(nums[i])
            }
        }
    }
    return arr
};
console.log(getSneakyNumbers([7,1,5,4,3,4,6,0,9,5,8,2]));
