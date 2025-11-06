/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    
    let arr=[]
    for(i=0;i<nums.length;i++){
        let count=0
        for(j=0;j<nums.length;j++){
            if(nums[i]>nums[j]){
                count=count+1
            }
        }
        arr.push(count)
    }
    return arr
    
};
console.log(smallerNumbersThanCurrent([8,1,2,2,3]));
