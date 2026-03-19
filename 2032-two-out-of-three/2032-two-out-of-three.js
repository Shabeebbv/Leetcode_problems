/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
      let arr=[]
    let num1=new Set(nums1)
    let num2=new Set(nums2)
    let num3=new Set(nums3)
    for(x of num1){
        if(num2.has(x)||num3.has(x)){
            arr.push(x)
        }
    }
    for(y of num2){
        if(num3.has(y)&&!arr.includes(y)){
            arr.push(y)
        }
    }
    return arr
};