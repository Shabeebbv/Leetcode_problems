/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let  ev=[]
    let od=[]
    let arr=[]
    for(i=0;i<nums.length;i++){
        if (nums[i]%2==0){
            ev.push(nums[i])
        }
        else{
            od.push(nums[i])
        }
    }
    let e=0
    let o=0
    for(let j=0;j<nums.length;j++){
        if(j%2==0){
            arr.push(ev[e++])
        }
        else{
            arr.push(od[o++])
        }
    }
    return arr
};
console.log(sortArrayByParityII([4,2,5,7]))