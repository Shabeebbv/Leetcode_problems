/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    let answer1=0
    let answer2=0
    for(i=0;i<nums1.length;i++){
        for(j=0;j<nums2.length;j++){
            if(nums1[i]==nums2[j]){
                answer1+=1
                break;
            }
        }
    }
     for(i=0;i<nums2.length;i++){
        for(j=0;j<nums1.length;j++){
            if(nums2[i]==nums1[j]){
                answer2+=1
                break;
            }
        }
    }
    return [answer1,answer2]
};
console.log(findIntersectionValues([4,3,2,3,1], [2,2,5,2,3,6]));
