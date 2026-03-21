/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let arr=[]
    let obj={}
    for(let i=0;i<nums.length;i++){
        value=nums[i]
        if (obj[value]){
            obj[value]++
        }
        else{
            obj[value]=1
        }
    }
    for(let x in obj){
        if(obj[x]>1){
            arr.push(Number((x)))
        }
    }
    return arr
}; 
console.log(findDuplicates([1,1,3,2]));