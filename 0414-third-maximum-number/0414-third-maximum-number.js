/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let x=[...new Set(nums)].sort((x,y)=>y-x)
    if(x.length>=3){
        return x.at(2)
    }
    else{
        return x.at(0)
    }
};
console.log(thirdMax([3,2,1,2]));
