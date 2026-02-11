/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    // let arr=[]
    let obj={}
    for(i=0;i<nums.length;i++){
        let value=nums[i]
        if(obj[value]){
            obj[value]++
        }
        else{
            obj[value]=1
        }
    }
    return nums.sort((a,b)=>obj[a]-obj[b]||b-a)  
};
console.log(frequencySort([2,3,1,3,2]));