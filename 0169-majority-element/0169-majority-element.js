/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count={}
    for(i=0;i<nums.length;i++){
        let value=nums[i]
        if(count[value]){
            count[value]++
        }
        else{
            count[value]=1
        }
        // var max=Math.max(count[value])
    }
    let max=Math.max(...Object.values(count))
    for(let key in count){
        if(count[key]==max){
            return Number(key)
        }
    }
};
console.log(majorityElement([3,3,4]));

