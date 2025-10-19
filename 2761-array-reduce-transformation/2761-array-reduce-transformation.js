var reduce = function(nums, fn, init) {
    let res=init
    
        for(let i=0;i<nums.length;i++){
            res=fn(res,nums[i])
        }
        return res
    
    // return reduce
    
};
console.log(reduce([1,2,3,4,5],function sum(accum, curr) { return accum + curr; },0));
