var maximumProduct = function(nums) {
    let srt=nums.sort((a,b)=>a-b)
    let len=nums.length
    let first=nums[len-1]*nums[len-2]*nums[len-3]
    let second=nums[0]*nums[1]*nums[len-1]
    let w=[first,second]
    let z=Math.max(...w)
    return z
};
console.log(maximumProduct([3,2,1]));
