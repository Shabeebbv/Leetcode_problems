var firstMissingPositive = function(nums) {
    x=nums.sort((x,y)=>x-y)
    y=1
    for(i=0;i<nums.length;i++){
        if(nums[i]>0 && nums[i]==y){
            y++
        }
        else if(nums[i]>y){
            return y
        }
    }
    return y
};