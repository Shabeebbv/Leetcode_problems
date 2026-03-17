/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumDivisibleByK = function(nums, k) {
    let sum=0
    let obj={}
    for(i=0;i<nums.length;i++){
        value=nums[i]
        if(obj[value]){
            obj[value]++
        }
        else{
            obj[value]=1
        }
    }
    for (let key in obj){
        if(obj[key]%k==0){
            sum+=obj[key]*key
        }
    }
    return sum
};