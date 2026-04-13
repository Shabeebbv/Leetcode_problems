/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    uniq=new Set(nums)
    let arr=[]
    for(i=1;i<=nums.length;i++){
        if(!uniq.has(i)){
            arr.push(i)
        }
    }
    return arr
};
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
