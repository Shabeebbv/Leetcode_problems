/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    lsum=[]
    rsum=[]
    tsum=[]
    csuml=0
    csumr=0
        for(i=0;i<nums.length;i++){
            
            lsum.push(csuml)
            csuml+=nums[i]
    }
    for(i=nums.length-1;i>=0;i--){
        rsum.push(csumr)
        csumr+=nums[i]        
    }
    arr=rsum.reverse().map((x,i)=>Math.abs(x-lsum[i]))
    return arr
};
console.log(leftRightDifference([10,4,8,3]));
