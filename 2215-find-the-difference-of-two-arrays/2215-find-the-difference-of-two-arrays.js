/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)
    let arr1=[]
    let arr2=[]
    for(let x of set1){
        if(!set2.has(x)){
            arr1.push(x)
        }
    }
    for(let y of set2){
        if(!set1.has(y)){
            arr2.push(y)
        }
    }
    return [arr1,arr2]
}