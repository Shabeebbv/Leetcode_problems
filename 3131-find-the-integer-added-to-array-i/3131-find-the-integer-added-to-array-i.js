/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {
    count=0
   x=nums1.sort((a,b)=>a-b)
   y=nums2.sort((a,b)=>a-b)
   for(i=0;i<1;i++){
    count+=y[i]-x[i]
   }
    return count
};