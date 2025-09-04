var removeDuplicates = function(nums) {
    nums.sort (function(a,b){
        return a-b
    })
    // console.log(nums);
    
    for(i=0;i<nums.length;i++){
        // console.log(nums[i],nums[i+1])
        if(nums[i]==nums [i+1]){
             nums.pop()
            // console.log(nums[i]);
            
        }
    }
};

console.log(removeDuplicates([1,2,3,4,5,5]))