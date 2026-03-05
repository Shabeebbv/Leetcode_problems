/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
   let sum=0
   let arr=nums.sort((x,y)=>x-y)
    for(i=0;i<nums.length;i++){
      if(i%2==0){
         sum+=arr[i]
      }
    }
    return sum
};
console.log(arrayPairSum([1,4,3,2]));
