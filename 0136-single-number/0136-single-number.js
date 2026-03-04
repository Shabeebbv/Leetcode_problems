/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
   let obj={}
   for(let i=0;i<nums.length;i++){
        let value=nums[i]
        if(obj[value]){
            obj[value]++
        }
        else{
            obj[value]=1
        }
   }
   
   for(let key in obj){
    if(obj[key]==1){
        return Number(key)
    }
   }
   
};
console.log(singleNumber([2,2,1]));
