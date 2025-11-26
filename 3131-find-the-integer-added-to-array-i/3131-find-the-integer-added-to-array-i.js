/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {
    x=Math.min(...nums2)
    y=Math.min(...nums1)
    return x-y
};